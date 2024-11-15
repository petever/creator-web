import {useFieldArray, useForm} from 'react-hook-form'
import {DropzoneRef} from "@/widgets/AddContentModal/types";
import {ImageOptimizeData} from "@/entities/ImageUpload/types";
import {useRef} from "react";
import ky from "@toss/ky";
import {useCreatePosts} from "@/widgets/AddContentModal/hooks/useCreatePosts";

export const useContentModal = () => {
  const methods = useForm({
    defaultValues : {
      currentFile: '',
      currentFileType: '',
      step: 0,
      currentIndex: 0,
      title: '',
      contents: '',
      files: [],
      isPreview: false,
      isSubscribed: 'false',
    }
  })

  const {control, setValue, getValues,
    watch, reset} = methods

  const {step, currentFile, currentFileType, files, currentIndex} = watch()

  const { fields, append, prepend, remove, swap, move, insert }  = useFieldArray({
    control,
    name : 'files'
  })

  const { createPostMutation } = useCreatePosts(() => handleModalClose())

  const dropzoneRef = useRef<DropzoneRef>();

  const handleModalClose = () => {
    reset()
  }

  const handleOpenDialog = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open()
    }
  };


  const handleDropImages = async (uploadFiles: File[]) => {
    const formData = new FormData()

    uploadFiles.forEach((file) => {
      formData.append('file', file)
    })

    const files = await processFiles(formData)

    const settingFile = files[0]
    const url = URL.createObjectURL(settingFile)
    setValue('currentFile', url)

    files.forEach(file => {
      // insert(file)
    })

    if (settingFile.type === 'video/mp4') {
      return setValue('currentFileType', 'video')
    }
    setValue('currentFileType', 'image')
  }

  const processFiles = async (formData: FormData): Promise<File[]> => {
    const imageOptimizeData = await ky.post('/api/image-optimize', {
      body : formData
    }).json()

    const result = await imageOptimizeData
    return await Promise.all(
      result.data.files.map(async (bufferFile: ImageOptimizeData) => {
        const bufferArray = bufferFile.buffer.data
        const blob = new Blob([new Uint8Array(bufferArray)])

        if(bufferFile.type === 'video'){
          return new File([blob], `${bufferFile.name}.mp4`, { type: 'video/mp4' })
        }

        return new File([blob], `${bufferFile.name}.jpeg`, { type: 'image/jpeg' })
      })
    )
  }

  const handleRemoveImage = (index: number) => {
    remove(index)

    const uploadFiles = form.getValues().files

    if (uploadFiles.length === 0) {
      setValue('currentIndex', 0)
      setValue('currentFile', '')
      return
    }
    const file = files[0]
    const url = URL.createObjectURL(file)
    setValue('currentFile', url)
  }

  const handleChangeCurrentImage = (url: string, index: number, type : "video" | "image") => {
    setValue('currentFile', url)
    setValue('currentIndex', index)
    setValue('currentFileType', type)
  }

  const handleSubmitContentData = (values: any) => {
    const { title, contents, isSubscribed, files } = values

    const formData = new FormData()
    formData.append(
      'postRequest',
      new Blob(
        [
          JSON.stringify({
            title,
            contents,
            isSubscribed: values.isSubscribed !== 'false',
          }),
        ],
        { type: 'application/json' },
      ),
    )

    files.forEach((file) => {
      return formData.append('files', file)
    })

    createPostMutation(formData)
  }


  return {
    methods,
    dropzoneRef,
    handleOpenDialog,
    handleDropImages,
    handleRemoveImage,
    handleChangeCurrentImage,
    handleSubmitContentData
  }
}
import { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { ImageOptimizeData } from '@/entities/ImageUpload/types'
import { useCreatePosts } from '@/widgets/AddContentModal/hooks/useCreatePosts'
import ky from '@toss/ky'
import {AddContentData} from "@/widgets/AddContentModal/types";

export const useContentModal = (onClose: () => void) => {
  const methods = useForm<AddContentData>({
    defaultValues: {
      currentFile: '',
      currentFileType: '',
      step: 0,
      currentIndex: 0,
      contents: '',
      files: [],
      isLoading: false,
      isSubscribed: 'all',
    },
  })

  const { control, setValue, getValues, watch, reset } = methods

  const { step, currentFile, currentFileType, files, currentIndex } = watch()

  const {
    fields: filesFields,
    append: filesAppend,
    prepend: filesPrepend,
    remove: filesRemove,
    swap: filesSwap,
    move: filesMove,
    insert: filesInsert,
  } = useFieldArray({
    control : methods.control,
    name: 'files',
  })

  const { createPostMutation } = useCreatePosts(() => handleModalClose())

  const handleModalClose = () => {
    onClose()
    reset()
  }

  const handleDropImages = async (uploadFiles: File[]) => {
    const formData = new FormData()

    uploadFiles.forEach((file) => {
      formData.append('file', file)
    })

    setValue('isLoading', true)
    const files = await processFiles(formData)

    const settingFile = files[0]
    const url = URL.createObjectURL(settingFile)
    setValue('currentFile', url)

    files.forEach((file) => {
      filesAppend({
        name : file.name,
        type : file.type,
        file : file,
        url : URL.createObjectURL(file)
      })
    })

    if (settingFile.type === 'video/mp4') {
      return setValue('currentFileType', 'video')
    }
    setValue('currentFileType', 'image')
    setValue('isLoading', false)
  }

  const processFiles = async (formData: FormData): Promise<File[]> => {
    const imageOptimizeData = await ky
      .post('/api/image-optimize', {
        body: formData,
      })
      .json()

    const result = await imageOptimizeData
    return await Promise.all(
      result.data.files.map(async (bufferFile: ImageOptimizeData) => {
        const bufferArray = bufferFile.buffer.data
        const blob = new Blob([new Uint8Array(bufferArray)])

        if (bufferFile.type === 'video') {
          return new File([blob], `${bufferFile.name}.mp4`, { type: 'video/mp4' })
        }

        return new File([blob], `${bufferFile.name}.jpeg`, { type: 'image/jpeg' })
      }),
    )
  }

  const handleRemoveImage = (index: number) => {
    filesRemove(index)

    const uploadFiles = getValues().files

    setValue('isLoading', false)

    if (uploadFiles.length === 0) {
      setValue('currentIndex', 0)
      setValue('currentFile', '')
      return
    }

    const file = files[0].file
    const url = URL.createObjectURL(file as File)
    setValue('currentFile', url)
  }

  const handleChangeCurrentImage = (url: string, index: number, type: 'video' | 'image') => {
    setValue('currentFile', url)
    setValue('currentIndex', index)
    setValue('currentFileType', type)
  }

  const handleSubmitContentData = (values: Pick<AddContentData, 'title' | 'contents' | 'files' | 'isSubscribed'>) => {
    const { title, contents, files } = values

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

    files.forEach((data) => {
      return formData.append('files', data.file)
    })

    createPostMutation(formData)
    reset()
  }

  return {
    methods,
    handleDropImages,
    handleRemoveImage,
    handleChangeCurrentImage,
    handleSubmitContentData,
  }
}

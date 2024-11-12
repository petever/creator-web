'use client'
import React, {createRef} from 'react';
import {useDropzone} from 'react-dropzone'
import PreviewList from '@/features/PreviewList/ui'
import { useContentFormContext } from '@/widgets/AddContentModal/lib/form-context'
import ky from "@toss/ky";
import {ImageOptimizeData} from "@/entities/ImageUpload/types";
import Dropzone from 'react-dropzone';

const ContentUpload = () => {
  const {getRootProps, getInputProps, open} = useDropzone({
    accept: {
      'image/*': [],
      'video/mp4': ['.mp4'],
    },
    onDrop : acceptedFiles => handleDropImages(acceptedFiles)

  });
  const form = useContentFormContext()
  const {values, setFieldValue, insertListItem, removeListItem, reorderListItem, watch} = form

  const {step, currentFile, currentFileType, files, currentIndex} = values

  const dropzoneRef = createRef();
  const openDialog = () => {
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
    setFieldValue('currentFile', url)

    files.forEach(file => {
      insertListItem('files', file)
    })

    if (settingFile.type === 'video/mp4') {
      return setFieldValue('currentFileType', 'video')
    }
    setFieldValue('currentFileType', 'image')
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
    removeListItem('files', index)

    const uploadFiles = form.getValues().files

    if (uploadFiles.length === 0) {
      setFieldValue('currentIndex', 0)
      setFieldValue('currentFile', '')
      return
    }
    const file = files[0]
    const url = URL.createObjectURL(file)
    setFieldValue('currentFile', url)
  }

  const handleChangeCurrentImage = (url: string, index: number, type : "video" | "image") => {
    setFieldValue('currentFile', url)
    setFieldValue('currentIndex', index)
    setFieldValue('currentFileType', type)
  }

  if (step > 0) return null

  return (
    <div>
      {!currentFile &&
        <Dropzone ref={dropzoneRef}>
          {({getRootProps, getInputProps, acceptedFiles}) => {
            return (
              <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here</p>
              </div>
            )
          }}
        </Dropzone>
      }
      <PreviewList
        currentFile={currentFile}
        currentFileType={currentFileType}
        currentIndex={currentIndex}
        previews={files}
        onRemoveImage={handleRemoveImage}
        onShowImageChange={handleChangeCurrentImage}
        onImageUpload={openDialog}
      />
    </div>
  )
}
export default ContentUpload

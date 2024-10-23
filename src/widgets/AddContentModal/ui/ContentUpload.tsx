'use client'

import { Group } from '@mantine/core'
import {
  Dropzone,
  DropzoneProps,
  FileWithPath,
  IMAGE_MIME_TYPE,
  MIME_TYPES,
} from '@mantine/dropzone'
import { useRef, useState } from 'react'
import PreviewList from '@/features/PreviewList/ui'
import { DropzoneAccept, DropzoneIdle, DropzoneReject } from '@/entities/ImageUpload/ui'
import { useContentFormContext } from '@/widgets/AddContentModal/lib/form-context'
import {clientKy} from "@/shared/core/clientKy";
import ky from "@toss/ky";
import {ImageOptimizeData} from "@/entities/ImageUpload/types";
import * as buffer from "node:buffer";

const ContentUpload = (props: Partial<DropzoneProps>) => {
  const form = useContentFormContext()
  const {values, setFieldValue, insertListItem, removeListItem, reorderListItem, watch} = form

  const {step, currentFile, currentFileType, files, currentIndex} = values
  const openRef = useRef<() => void>(null)

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
      {!currentFile && (
        <Dropzone
          onDrop={handleDropImages}
          maxSize={2 * 1024 ** 3}
          accept={[
            MIME_TYPES.jpeg,
            MIME_TYPES.png,
            MIME_TYPES.svg,
            MIME_TYPES.mp4
          ]}
          {...props}
          openRef={openRef}
        >
          <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
            <DropzoneAccept />
            <DropzoneReject />
            <DropzoneIdle text={'사진과 동영상을 이곳에 드래그 앤 드롭 해주세요.'} isPhoto />
          </Group>
        </Dropzone>
      )}
      <PreviewList
        currentFile={currentFile}
        currentFileType={currentFileType}
        currentIndex={currentIndex}
        previews={files}
        onRemoveImage={handleRemoveImage}
        onShowImageChange={handleChangeCurrentImage}
        onImageUpload={openRef.current}
      />
    </div>
  )
}
export default ContentUpload

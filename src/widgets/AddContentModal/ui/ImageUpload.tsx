'use client'

import {Group} from '@mantine/core';
import {Dropzone, DropzoneProps, FileWithPath, IMAGE_MIME_TYPE} from '@mantine/dropzone';
import {useRef, useState} from "react";
import PreviewList from "@/features/PreviewList/ui";
import {DropzoneAccept, DropzoneIdle, DropzoneReject} from "@/entities/ImageUpload/ui";
import { useContentFormContext  } from '@/widgets/AddContentModal/lib/form-context'


const ImageUpload = (props: Partial<DropzoneProps>) => {
  const form = useContentFormContext()
  const {values, setFieldValue, insertListItem, removeListItem, reorderListItem, watch} = form

  const { step, currentImage, files, currentIndex } = values
	const openRef = useRef<() => void>(null);

	const handleDropImages = (uploadFiles : File[]) => {
    uploadFiles.forEach((file) => {
      insertListItem('files', file)
    })

		const file = uploadFiles[0]
		const url = URL.createObjectURL(file);
    setFieldValue('currentImage', url)
	}

  const handleRemoveImage = (index : number) => {
    removeListItem('files', index)

    const uploadFiles = form.getValues().files

    if(uploadFiles.length === 0) {
      setFieldValue('currentIndex', 0)
      setFieldValue('currentImage', '')
      return
    }
    const file = files[0]
    const url = URL.createObjectURL(file);
    setFieldValue('currentImage', url)
  }

	const handleChangeCurrentImage = (url : string, index : number) => {
    setFieldValue('currentImage', url)
    setFieldValue('currentIndex', index)
	}

  if(step > 0) return null

	return (
		<div>
			{!currentImage &&
        <Dropzone
          onDrop={handleDropImages}
          maxSize={5 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          {...props}
          openRef={openRef}
        >
          <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
            <DropzoneAccept/>
            <DropzoneReject/>
            <DropzoneIdle text={'사진과 동영상을 이곳에 드래그 앤 드롭 해주세요.'} isPhoto/>
          </Group>
        </Dropzone>
			}
			<PreviewList
        currentImage={currentImage}
				currentIndex={currentIndex}
				previews={files}
        onRemoveImage={handleRemoveImage}
				onShowImageChange={handleChangeCurrentImage}
				onImageUpload={openRef.current}
			/>
		</div>
	)
}
export default ImageUpload

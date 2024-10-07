'use client'

import {Group} from '@mantine/core';
import {Dropzone, DropzoneProps, FileWithPath, IMAGE_MIME_TYPE, MIME_TYPES } from '@mantine/dropzone';
import {useRef, useState} from "react";
import PreviewList from "@/features/PreviewList/ui";
import {DropzoneAccept, DropzoneIdle, DropzoneReject} from "@/entities/ImageUpload/ui";
import { useContentFormContext  } from '@/widgets/AddContentModal/lib/form-context'


const ContentUpload = (props: Partial<DropzoneProps>) => {
  const form = useContentFormContext()
  const {values, setFieldValue, insertListItem, removeListItem, reorderListItem, watch} = form

  const { step, currentFile, currentFileType, files, currentIndex } = values
	const openRef = useRef<() => void>(null);

	const handleDropImages = (uploadFiles : File[]) => {
    uploadFiles.forEach((file) => {
      insertListItem('files', file)
    })

		const file = uploadFiles[0]

		const url = URL.createObjectURL(file);
    setFieldValue('currentFile', url)

    if(file.type === "video/mp4") {
      return setFieldValue('currentFileType', 'video')
    }

    setFieldValue('currentFileType', 'image')
	}

  const handleRemoveImage = (index : number) => {
    removeListItem('files', index)

    const uploadFiles = form.getValues().files

    if(uploadFiles.length === 0) {
      setFieldValue('currentIndex', 0)
      setFieldValue('currentFile', '')
      return
    }
    const file = files[0]
    const url = URL.createObjectURL(file);
    setFieldValue('currentFile', url)
  }

	const handleChangeCurrentImage = (url : string, index : number) => {
    setFieldValue('currentFile', url)
    setFieldValue('currentIndex', index)
	}

  if(step > 0) return null

	return (
		<div>
			{!currentFile &&
        <Dropzone
          onDrop={handleDropImages}
          maxSize={5 * 1024 ** 2}
          accept={[
            MIME_TYPES.jpeg,
            MIME_TYPES.png,
            MIME_TYPES.svg,
            // MIME_TYPES.mp4
          ]}
          {...props}
          openRef={openRef}
        >
          <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
            <DropzoneAccept/>
            <DropzoneReject/>
            <DropzoneIdle text={'사진을 이곳에 드래그 앤 드롭 해주세요.'} isPhoto/>
          </Group>
        </Dropzone>
			}
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

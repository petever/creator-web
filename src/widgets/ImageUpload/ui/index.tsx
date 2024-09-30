'use client'

import {Group} from '@mantine/core';
import {Dropzone, DropzoneProps, FileWithPath, IMAGE_MIME_TYPE} from '@mantine/dropzone';
import {useRef, useState} from "react";
import PreviewList from "@/features/PreviewList/ui";
import {DropzoneAccept, DropzoneIdle, DropzoneReject} from "@/entities/ImageUpload/ui";

const ImageUpload = (props: Partial<DropzoneProps>) => {
	const [image, setImage] = useState('')
	const [currentIndex, setCurrentIndex] = useState(0)
	const [files, setFiles] = useState<FileWithPath[]>([]);
	const openRef = useRef<() => void>(null);

	const handleDropImages = (uploadFiles : FileWithPath[]) => {
		setFiles(prev => {
			return [...prev, ...uploadFiles]
		})

		const file = uploadFiles[0]
		const imageUrl = URL.createObjectURL(file);
		setImage(imageUrl)
	}

	const handleChangeCurrentImage = (url : string, index : number) => {
		setImage(url)
		setCurrentIndex(index)
	}

	return (
		<div>
			{!image &&
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
				image={image}
				currentIndex={currentIndex}
				previews={files}
				onShowImageChange={handleChangeCurrentImage}
				onImageUpload={openRef.current}
			/>
		</div>
	)
}
export default ImageUpload

'use client'

import { UnstyledButton } from '@mantine/core';
import { IconCirclePlus } from '@tabler/icons-react';
import { FileWithPath } from '@mantine/dropzone';
import Image from "next/image";
import classes from './styles.module.css'
import {Preview} from "@/features/PreviewList/ui/Preview";

interface PreviewListProps {
	image ?: string
	currentIndex : number
	previews : FileWithPath[]
	onShowImageChange : (url : string, index : number) => void
	onImageUpload: (() => void) | null;
}

const PreviewList = ({image, currentIndex, previews, onShowImageChange, onImageUpload} : PreviewListProps) => {
	const handleImageUpload = () => {
		onImageUpload?.()
	}

	if(!image) return null
  return (
		<div>
			<div className={classes.imageWrapper}>
				<Image src={image} fill alt=''/>
			</div>
			<div className={classes.imageUploadArea}>
				<UnstyledButton className={classes.imageUploadButton} onClick={handleImageUpload}>
					<IconCirclePlus/>
				</UnstyledButton>
				<Preview
					currentIndex={currentIndex}
					previews={previews}
					onShowImageChange={onShowImageChange}
				/>
			</div>
		</div>
	)
}

export default PreviewList
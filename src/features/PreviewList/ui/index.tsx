'use client'

import Image from "next/image";
import classes from './styles.module.css'
import {useContentFormContext} from "@/widgets/AddContentModal/lib/form-context";
import {MoreImageUpload} from "@/features/PreviewList/ui/MoreImageUpload";

interface PreviewListProps {
  currentImage ?: string
	currentIndex : number
	previews : File[]
	onShowImageChange : (url : string, index : number) => void
  onRemoveImage : (index : number) => void
	onImageUpload: (() => void) | null;
}

const PreviewList = ({currentImage, currentIndex, previews, onShowImageChange, onRemoveImage, onImageUpload} : PreviewListProps) => {
	if(!currentImage) return null
  return (
		<div className={classes.wrapper}>
			<div className={classes.imageWrapper}>
				<Image src={currentImage} fill alt=''/>
			</div>
      <MoreImageUpload
        currentIndex={currentIndex}
        currentImage={currentImage}
        previews={previews}
        onShowImageChange={onShowImageChange}
        onRemoveImage={onRemoveImage}
        onImageUpload={onImageUpload}
      />
		</div>
	)
}

export default PreviewList

'use client'

import Image from 'next/image'
import classes from './styles.module.css'
import { MoreMediaUpload } from '@/features/PreviewList/ui/MoreMediaUpload'
import {VideoPlayer} from "@/shared";
import {useFormContext} from "react-hook-form";

interface PreviewListProps {
  onShowImageChange: (url: string, index: number, type : "video" | "image") => void
  onRemoveImage: (index: number) => void
  onOpenDropzone : () => void
}

const PreviewList = ({
  onShowImageChange,
  onRemoveImage,
  onOpenDropzone
}: PreviewListProps) => {
  const method = useFormContext()
  const { getValues } = method
  const { currentFileType, currentFile } = getValues()

  const isImage = currentFileType === 'image'
  const isVideo = currentFileType === 'video'

  if (!currentFile) return null
  return (
    <div className={classes.wrapper}>
      <div className={classes.currentFilePreview}>
        <div className={classes.contentWrapper}>
          {currentFileType === 'image' && <Image src={currentFile} fill alt=""/>}
          {currentFileType === 'video' && <VideoPlayer src={currentFile}/>}
        </div>
      </div>
      <MoreMediaUpload
        onShowImageChange={onShowImageChange}
        onRemoveImage={onRemoveImage}
        onOpenDropzone={onOpenDropzone}
      />
    </div>
  )
}

export default PreviewList

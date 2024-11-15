'use client'

import Image from 'next/image'
import Video from 'next-video';
import classes from './styles.module.css'
import { MoreMediaUpload } from '@/features/PreviewList/ui/MoreMediaUpload'
import {VideoPlayer} from "@/shared";
import {useFormContext} from "react-hook-form";

interface PreviewListProps {
  currentFile?: string
  currentFileType: 'image' | 'video'
  currentIndex: number
  previews: File[]
  onShowImageChange: (url: string, index: number, type : "video" | "image") => void
  onRemoveImage: (index: number) => void
  onImageUpload: () => void
}

const PreviewList = ({
  currentFile,
  currentFileType,
  currentIndex,
  previews,
  onShowImageChange,
  onRemoveImage,
  onImageUpload,
}: PreviewListProps) => {
  const method = useFormContext()

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
        currentIndex={currentIndex}
        previews={previews}
        onShowImageChange={onShowImageChange}
        onRemoveImage={onRemoveImage}
        onImageUpload={onImageUpload}
      />
    </div>
  )
}

export default PreviewList

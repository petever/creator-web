'use client'

import Image from 'next/image'
import Video from 'next-video';
import classes from './styles.module.css'
import { MoreMediaUpload } from '@/features/PreviewList/ui/MoreMediaUpload'

interface PreviewListProps {
  currentFile?: string
  currentFileType: 'image' | 'video'
  currentIndex: number
  previews: File[]
  onShowImageChange: (url: string, index: number, type : "video" | "image") => void
  onRemoveImage: (index: number) => void
  onImageUpload: (() => void) | null
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
  if (!currentFile) return null
  return (
    <div className={classes.wrapper}>
      <div className={classes.currentFilePreview}>
        {currentFileType === 'image' && <Image src={currentFile} fill alt="" />}
        {currentFileType === 'video' &&
          <Video
            src={currentFile} // 비디오 파일 경로
            autoPlay={false}
            muted
            loop
            playsInline
            controls={false}
          ></Video>
        }
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

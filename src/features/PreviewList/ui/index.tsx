'use client'

import Image from 'next/image'
import classes from './styles.module.css'
import { useContentFormContext } from '@/widgets/AddContentModal/lib/form-context'
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
          <video autoPlay>
            <source src={currentFile} type="video/mp4" />
          </video>
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

'use client'

import Image from 'next/image'
import { MoreMediaUpload } from '@/features/PreviewList/ui/MoreMediaUpload'
import { VideoPlayer } from '@/shared'
import { useFormContext } from 'react-hook-form'

interface PreviewListProps {
  onShowImageChange: (url: string, index: number, type: 'video' | 'image') => void
  onRemoveImage: (index: number) => void
  onOpenDropzone: () => void
}

const PreviewList = ({ onShowImageChange, onRemoveImage, onOpenDropzone }: PreviewListProps) => {
  const method = useFormContext()
  const { getValues } = method
  const { currentFileType, currentFile } = getValues()

  const isImage = currentFileType === 'image'
  const isVideo = currentFileType === 'video'

  if (!currentFile) return null
  return (
    <div className="relative">
      <div className="relative top-0 left-0 h-0 pt-[80%] overflow-hidden">
        <div className="w-full h-full absolute top-0 left-1/2 transform -translate-x-1/2 bg-black">
          {isImage && <Image src={currentFile} fill alt="" className="object-contain" />}
          {isVideo && <VideoPlayer src={currentFile} />}
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

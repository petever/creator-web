'use client'

import Image from 'next/image'
import { MoreMediaUpload } from '@/features/PreviewList/ui/MoreMediaUpload'
import { VideoPlayer } from '@/shared'
import { useFormContext } from 'react-hook-form'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel'
import { ContentFile } from '@/widgets/AddContentModal/types'
import { useEffect, useState } from 'react'

interface PreviewListProps {
  onRemoveImage: (index: number) => void
}

const PreviewList = ({ onRemoveImage }: PreviewListProps) => {
  const method = useFormContext()
  const { getValues, setValue, watch } = method
  const { currentFileType, currentFile, files } = getValues()
  const [api, setApi] = useState<CarouselApi>()

  const isVideo = currentFileType === 'video'

  useEffect(() => {
    if (!api) {
      return
    }

    setValue('currentIndex', api.selectedScrollSnap())

    api.on('select', () => {
      setValue('currentIndex', api.selectedScrollSnap())
    })
  }, [api])

  if (!currentFile) return null

  return (
    <div className="relative">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {files?.map((file: ContentFile, index: number) => {
            return (
              <CarouselItem key={`content_${index}`}>
                {!isVideo ? (
                  <Image src={file.url!} alt="" width={600} height={600} />
                ) : (
                  <VideoPlayer src={file.url!} isControl />
                )}
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="left-6" />
        <CarouselNext className="right-6" />
      </Carousel>
      <MoreMediaUpload onRemoveImage={onRemoveImage} />
    </div>
  )
}

export default PreviewList

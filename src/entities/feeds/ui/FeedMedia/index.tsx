'use client'
import { Resource } from '@/entities/feeds/types'
import Image from 'next/image'
import {CommentListModal, VideoPlayer} from '@/shared'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel'
import { useEffect, useState } from 'react'

interface FeedMediaProps {
  resources: Resource[]
  viewType ?: 'row' | 'grid'
}

export const FeedMedia = ({ resources, viewType = 'row'}: FeedMediaProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [isImgError, setIsImgError] = useState<boolean>(false)

  useEffect(() => {
    if (!carouselApi) {
      return
    }

    setCurrent(carouselApi.selectedScrollSnap() + 1)

    carouselApi.on('select', () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1)
    })
  }, [carouselApi])

  // TODO : 그리드일 때, UI를 별도로 고민이 더 필요해보임

  if (resources.length === 1 || viewType === 'grid') {
    const isVideo = resources[0].mimeType === 'VIDEO'
    const url = resources[0].filePath

    return (
      <div className="overflow-hidden">
        {!isVideo ? (
          <Image
            src={isImgError ? '/assets/error.webp' : url}
            alt=""
            width={640}
            height={640}
            onError={() => setIsImgError(true)}
          />
        ) : (
          <VideoPlayer src={url} isControl viewType={viewType}/>
        )}
      </div>
    )
  }

  return (
    <Carousel className="overflow-hidden">
      <CarouselContent>
        {resources?.map((resource: Resource, resourceIndex) => {
          const isVideo = resource.mimeType === 'VIDEO'
          const url = resource.filePath
          return (
            <CarouselItem key={`${resourceIndex}`} className="h-full p-0">
              {!isVideo ? (
                <Image
                  src={url}
                  alt=""
                  width={640}
                  height={640}
                  onError={() => setIsImgError(true)}
                />
              ) : (
                <VideoPlayer src={url} isControl />
              )}
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious className="left-6" />
      <CarouselNext className="right-6" />
    </Carousel>
  )
}

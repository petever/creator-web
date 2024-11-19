'use client'
import { Resource } from '@/entities/feeds/types'
import Image from 'next/image'
import { VideoPlayer } from '@/shared'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/shared/ui/carousel'
import { useEffect, useState } from 'react'

interface FeedMediaProps {
  resources: Resource[]
}
export const FeedMedia = ({ resources }: FeedMediaProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!carouselApi) {
      return
    }

    setCurrent(carouselApi.selectedScrollSnap() + 1)

    carouselApi.on('select', () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1)
    })
  }, [carouselApi])

  if (resources.length === 1) {
    const isVideo = resources[0].mimeType === 'VIDEO'
    const url = resources[0].filePath
    return (
      <div>
        {!isVideo ? (
          <Image src={url} alt="" width={600} height={600} />
        ) : (
          <VideoPlayer src={url} isControl />
        )}
      </div>
    )
  }

  return (
    <Carousel>
      <CarouselContent>
        {resources?.map((resource: Resource, resourceIndex) => {
          const isVideo = resource.mimeType === 'VIDEO'
          const url = resource.filePath
          return (
            <CarouselItem key={`${resourceIndex}`}>
              {!isVideo ? (
                <Image src={url} alt="" width={600} height={600} />
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

'use client'
import {Resource} from "@/entities/feeds/types";
import Image from 'next/image'
import {VideoPlayer} from "@/shared";
import {Carousel, CarouselContent, CarouselItem} from "@/shared/ui/carousel";

interface FeedMediaProps{
  resources : Resource[]
}
export const FeedMedia = ({resources} : FeedMediaProps) => {
  if(resources.length === 1){
    const isVideo = resources[0].mimeType === 'VIDEO'
    const url = resources[0].filePath
    return (
      <div>
        {!isVideo
            ? <Image src={url} alt='' width={600} height={600}/>
            : <VideoPlayer src={url} isControl/>
        }
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
              {
                !isVideo
                ? <Image src={url} alt='' width={600} height={600}/>
                : <VideoPlayer src={url} isControl/>
              }
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}

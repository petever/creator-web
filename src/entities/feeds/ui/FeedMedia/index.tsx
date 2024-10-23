'use client'

import {Resource} from "@/entities/feeds/types";
import { Image } from '@mantine/core'
import {Carousel} from "@mantine/carousel";

interface FeedMediaProps{
  resources : Resource[]
}
export const FeedMedia = ({resources} : FeedMediaProps) => {
  if(resources.length === 1){
    const isVideo = resources[0].mimeType === 'VIDEO'
    return (
      !isVideo
        ? <Image src={resources[0].filePath} radius={0}/>
        :
         <video controls>
          <source src={resources[0].filePath} type="video/mp4" />
        </video>
    )
  }

  return (
    <Carousel>
      {resources?.map((resource: Resource, resourceIndex) => {
        const isVideo = resource.mimeType === 'VIDEO'

        return (
          <Carousel.Slide key={`${resourceIndex}`}>
            !isVideo
            ? <Image src={resources[0].filePath} radius={0}/>
            :
            <video>
              <source src={resources[0].filePath} type="video/mp4" />
            </video>
          </Carousel.Slide>
        )
      })}
    </Carousel>
  )
}

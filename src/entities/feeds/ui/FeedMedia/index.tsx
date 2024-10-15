'use client'

import {Resource} from "@/entities/feeds/types";
import { Image } from '@mantine/core'
import {Carousel} from "@mantine/carousel";

interface FeedMediaProps{
  resources : Resource[]
}
export const FeedMedia = ({resources} : FeedMediaProps) => {
  if(resources.length === 1){
    return (
      <Image src={resources[0].filePath} radius={0}/>
    )
  }

  return (
    <Carousel>
      {resources?.map((resource: Resource, resourceIndex) => {
        return (
          <Carousel.Slide key={`${resourceIndex}`}>
            <Image src={resource.filePath} radius={0}/>
          </Carousel.Slide>
        )
      })}
    </Carousel>
  )
}

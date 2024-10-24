'use client'
import {Resource} from "@/entities/feeds/types";
import { Image } from '@mantine/core'
import {Carousel} from "@mantine/carousel";
import {VideoPlayer} from "@/shared";
import classes from './styles.module.css'

interface FeedMediaProps{
  resources : Resource[]
}
export const FeedMedia = ({resources} : FeedMediaProps) => {
  if(resources.length === 1){
    const isVideo = resources[0].mimeType === 'VIDEO'
    const url = resources[0].filePath
    return (
      <div className={classes.wrapper}>
        {!isVideo
            ? <Image src={url} radius={0}/>
            : <VideoPlayer src={url} isControl/>
        }
      </div>
    )
  }

  return (
    <Carousel
      height={600}
    >
      {resources?.map((resource: Resource, resourceIndex) => {
        const isVideo = resource.mimeType === 'VIDEO'
        const url = resource.filePath
        return (
          <Carousel.Slide key={`${resourceIndex}`}>
            {
              !isVideo
              ? <Image src={url} radius={0}/>
              : <VideoPlayer src={url} isControl/>
            }
          </Carousel.Slide>
        )
      })}
    </Carousel>
  )
}

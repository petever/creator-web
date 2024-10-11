'use client'
import {Modal, Image, Box} from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { CommentArea } from '@/widgets'
import {FeedContents, Resource} from "@/entities/feeds/types";
import {Profile} from "@/features";
import classes from './styles.module.css'

interface FeedDetailProps {
  title?: string | React.ReactNode
  feed :  FeedContents
  opened: boolean
  onClose: () => void
}
export const FeedDetail = ({ title, feed, opened, onClose }: FeedDetailProps) => {
  const {likeCount, resources} = feed

  return (
    <Modal size="lg" opened={opened} onClose={onClose} centered withCloseButton={false}>
      <div className={classes.header}>
        <Profile profile={feed.creator} size="md" />
      </div>
      <div>
        <Carousel>
          {resources?.map((resource: Resource, resourceIndex) => {
            return (
              <Carousel.Slide key={`${resourceIndex}`}>
                <Image src={resource.filePath} radius={0} />
              </Carousel.Slide>
            )
          })}
        </Carousel>
      </div>
      <CommentArea />
    </Modal>
  )
}

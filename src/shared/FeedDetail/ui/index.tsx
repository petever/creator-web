'use client'
import {Modal, Image, Box} from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { CommentArea } from '@/widgets'
import {FeedContents, Resource} from "@/entities/feeds/types";
import {Profile} from "@/features";
import classes from './styles.module.css'
import {FeedContent} from "@/entities/feeds/ui";
import {FeedMedia} from "@/entities/feeds/ui/FeedMedia";

interface FeedDetailProps {
  title?: string | React.ReactNode
  feed :  FeedContents
  opened: boolean
  onClose: () => void
}
export const FeedDetail = ({ title, feed, opened, onClose }: FeedDetailProps) => {
  return (
    <Modal size="lg" opened={opened} onClose={onClose} centered withCloseButton={false}>
      <div className={classes.header}>
        <Profile profile={feed.creator} size="md" />
      </div>
      <div>
        <FeedContent contents={feed.contents} createdAt={feed.createdAt}/>
        <FeedMedia resources={feed.resources}/>
      </div>
      <CommentArea />
    </Modal>
  )
}

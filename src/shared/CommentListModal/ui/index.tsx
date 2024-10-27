'use client'
import {Modal, Group, Flex} from '@mantine/core'
import { CommentArea } from '@/widgets'
import {FeedContents} from "@/entities/feeds/types";
import {Profile} from "@/features";
import classes from './styles.module.css'
import {FeedContent} from "@/entities/feeds/ui";
import {FeedMedia} from "@/entities/feeds/ui/FeedMedia";
import {useMediaQuery} from "@mantine/hooks";

interface FeedDetailProps {
  feed :  FeedContents
  opened: boolean
  onClose: () => void
}
export const CommentListModal = ({ feed, opened, onClose }: FeedDetailProps) => {
  return (
    <Modal size="100%"
      opened={opened}
      onClose={onClose}
      centered
      withCloseButton={false}
      classNames={{
        content : classes.wrapper
      }}
    >
      <CommentArea id={feed.id}/>
    </Modal>
  )
}

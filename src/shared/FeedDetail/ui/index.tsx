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
  title?: string | React.ReactNode
  feed :  FeedContents
  opened: boolean
  onClose: () => void
}
export const FeedDetail = ({ title, feed, opened, onClose }: FeedDetailProps) => {
  const isPc = useMediaQuery('(min-width: 640px)');

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
      <Flex
        align='start'
        gap={20}
      >
        <Group
          flex={1}
        >
          <div className={classes.header}>
            <Profile profile={feed.owner} size="md" />
          </div>
          <div>
            <FeedContent contents={feed.contents} createdAt={feed.createdAt}/>
            <FeedMedia resources={feed.resources}/>
          </div>
        </Group>
        {isPc &&
          <Group
            flex={1}
          >
            <CommentArea id={feed.id}/>
          </Group>
        }
      </Flex>
    </Modal>
  )
}

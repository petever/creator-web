'use client'
import { Box, Button, Card, Divider, Image } from '@mantine/core'
import {FeedButtons, Profile} from '@/features'
import { PostingHeader } from './PostingHeader'
import { FeedDetail } from '@/shared/FeedDetail/ui'
import { useDisclosure } from '@mantine/hooks'
import {FeedContents, Resource} from "@/entities/feeds/types";
import {UserProfile} from "@/entities/user/types";
import {DUMMY_PROFILE} from "@/shared/model";
import {Carousel} from "@mantine/carousel";

interface PostProps {
  profile?: UserProfile
  feed : FeedContents
}

export const Post = ({ profile, feed }: PostProps) => {
  const [opened, { open, close }] = useDisclosure(false)

  const handleDetailOpen = () => {
    open()
  }

  if(!feed) return null
  
  const {likeCount, resources} = feed

  return (
    <Card p={0} shadow="lg" padding="lg" radius="lg">
      <Box p={10}>
        <PostingHeader profile={feed.creator} />
      </Box>
      <Carousel>
        {resources?.map((resource: Resource, resourceIndex) => {
          return (
            <Carousel.Slide key={`${resourceIndex}`}>
              <Image src={resource.filePath} radius={0} />
            </Carousel.Slide>
          )
        })}
      </Carousel>
      <FeedButtons id={'feedId_01'} onDetailModal={handleDetailOpen} />
      <Box>
        <Button variant="transparent" onClick={handleDetailOpen}>
          댓글 {likeCount}개 보기
        </Button>
        <FeedDetail
          feed={feed}
          opened={opened}
          onClose={close}
        />
      </Box>
    </Card>
  )
}

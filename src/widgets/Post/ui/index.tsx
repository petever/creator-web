'use client'
import { Box, Button, Card, Image } from '@mantine/core'
import { FeedButtons } from '@/features'
import { PostingHeader } from './PostingHeader'
import { FeedDetail } from '@/shared/FeedDetail/ui'
import { useDisclosure } from '@mantine/hooks'
import { FeedContents, Resource } from '@/entities/feeds/types'
import { UserProfile } from '@/entities/user/types'
import { Carousel } from '@mantine/carousel'
import {LkeList} from "@/shared/LikeList/ui";

interface PostProps {
  profile?: UserProfile
  feed: FeedContents
}

export const Post = ({ profile, feed }: PostProps) => {
  const [feedOpened, { open : feedDetailOpen, close : feedDetailClose }] = useDisclosure(false)
  const [likeListOpened, { open : likeListOpen, close : likeListClose }] = useDisclosure(false)

  const handleDetailOpen = () => {
    feedDetailOpen()
  }

  const handleLikeListOpen = () => {
    likeListOpen()
  }

  if (!feed) return null

  const { likeCount, commentCount, resources } = feed

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
      <FeedButtons  feed={feed} onDetailModal={handleDetailOpen} />
      <Box>
        <Button variant="transparent" onClick={handleLikeListOpen}>
          좋아요 {likeCount}개 모두 보기
        </Button>
      </Box>
      <Box>
        <Button variant="transparent" onClick={handleDetailOpen}>
          댓글 {commentCount}개 모두 보기
        </Button>
      </Box>
      <LkeList opened={likeListOpened} onClose={likeListClose}/>
      <FeedDetail feed={feed} opened={feedOpened} onClose={feedDetailClose} />
    </Card>
  )
}

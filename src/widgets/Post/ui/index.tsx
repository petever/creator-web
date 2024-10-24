'use client'
import { Box, Button, Card } from '@mantine/core'
import { FeedButtons } from '@/features'
import { PostingHeader } from './PostingHeader'
import { FeedDetail } from '@/shared/FeedDetail/ui'
import { useDisclosure } from '@mantine/hooks'
import { FeedContents } from '@/entities/feeds/types'
import { LkeList } from '@/shared/LikeList/ui'
import { FeedContent } from '@/entities/feeds/ui'
import { FeedMedia } from '@/entities/feeds/ui/FeedMedia'

interface PostProps {
  feed: FeedContents
}

export const Post = ({ feed }: PostProps) => {
  const [feedOpened, { open: feedDetailOpen, close: feedDetailClose }] = useDisclosure(false)
  const [likeListOpened, { open: likeListOpen, close: likeListClose }] = useDisclosure(false)

  const handleDetailOpen = () => {
    feedDetailOpen()
  }

  const handleLikeListOpen = () => {
    likeListOpen()
  }

  if (!feed) return null

  const { likeCount, commentCount, resources } = feed

  return (
    <Card p={0} shadow="lg" padding="lg" radius="lg" w="100%">
      <PostingHeader profile={feed.owner} />
      <FeedContent contents={feed.contents} createdAt={feed.createdAt} />
      <FeedMedia resources={feed.resources} />
      <FeedButtons feed={feed} onDetailModal={handleDetailOpen} />
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
      <LkeList opened={likeListOpened} onClose={likeListClose} />
      <FeedDetail feed={feed} opened={feedOpened} onClose={feedDetailClose} />
    </Card>
  )
}

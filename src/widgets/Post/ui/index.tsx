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
import {useEffect, useRef, useState} from "react";
import {useMediaQuery} from "@mantine/hooks";
import {CommentListModal} from "@/shared";

interface PostProps {
  feed: FeedContents
  username ?: string
}

interface ElementPosition {
  offsetTop ?: number
  offsetBottom ?: number
}

export const Post = ({ feed, username}: PostProps) => {
  const [isPlay, setIsPlay] = useState(false)

  const isPc = useMediaQuery('(min-width: 640px)');

  const ref = useRef<HTMLDivElement>()
  const elementPosition = useRef<ElementPosition>({
    offsetTop : 0,
    offsetBottom : 0
  })

  const [feedOpened, { open: feedDetailOpen, close: feedDetailClose }] = useDisclosure(false)
  const [likeListOpened, { open: likeListOpen, close: likeListClose }] = useDisclosure(false)
  const [commentListOpened, { open: commentListOpen, close: commentListClose }] = useDisclosure(false)


  const handleDetailOpen = () => {
    if(!isPc) {
      return commentListOpen()
    }
    feedDetailOpen()
  }

  const handleLikeListOpen = () => {
    likeListOpen()
  }

  useEffect(() => {
    // elementPosition.current.offsetTop = ref.current?.offsetTop
    // elementPosition.current.offsetBottom = ref.current?.offsetTop + ref.current?.offsetHeight
  }, []);

  if (!feed) return null

  const { likeCount, commentCount, resources } = feed

  return (
    <Card p={0} shadow="lg" padding="lg" radius="lg" w="100%">
      <PostingHeader profile={feed.owner} />
      <FeedContent contents={feed.contents} createdAt={feed.createdAt} />
      <FeedMedia resources={feed.resources} />
      <FeedButtons feed={feed} onDetailModal={handleDetailOpen} username={username}/>
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
      <CommentListModal
        feed={feed}
        opened={commentListOpened} onClose={commentListClose}
      />
    </Card>
  )
}

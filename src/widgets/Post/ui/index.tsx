'use client'
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
import {CommentListModal, LoginModal} from "@/shared";
import {Card} from "@/shared/ui/card";
import {Button} from "@/shared/ui/button";

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

  const [ feedOpened, setFeedOpened ] = useState(false)
  const [ commentListOpened, setCommentListOpened ] = useState(false)

  const handleDetailOpen = () => {
    if(!isPc) {
      return setCommentListOpened(true)
    }
    setFeedOpened(true)
  }

  const modalClose = (type : 'feed' | 'like' | 'comment') => {
    if(type === 'feed') {
      setFeedOpened(false)
    }

    return setCommentListOpened(false)
  }

  useEffect(() => {
    // elementPosition.current.offsetTop = ref.current?.offsetTop
    // elementPosition.current.offsetBottom = ref.current?.offsetTop + ref.current?.offsetHeight
  }, []);

  if (!feed) return null

  const { likeCount, commentCount, resources } = feed

  return (
    <Card>
      <PostingHeader profile={feed.owner} />
      <FeedContent contents={feed.contents} createdAt={feed.createdAt} />
      <FeedMedia resources={feed.resources} />
      <FeedButtons feed={feed} onDetailModal={handleDetailOpen} username={username}/>
      <div className={'flex flex-col items-start'}>
        <LkeList likeCount={likeCount}/>
        <FeedDetail feed={feed} />
      </div>
    </Card>
  )
}

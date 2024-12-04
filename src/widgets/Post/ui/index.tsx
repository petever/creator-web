'use client'
import { FeedButtons, PostingLSubscribeLocker } from '@/features'
import { PostingHeader } from './PostingHeader'
import { FeedContents } from '@/entities/feeds/types'
import { LkeList } from '@/shared/LikeList/ui'
import { FeedContent } from '@/entities/feeds/ui'
import { FeedMedia } from '@/entities/feeds/ui/FeedMedia'
import { useEffect, useRef, useState } from 'react'
import { Card } from '@/shared/ui/card'

interface PostProps {
  feed: FeedContents
  username?: string
}

interface ElementPosition {
  offsetTop?: number
  offsetBottom?: number
}

export const Post = ({ feed, username }: PostProps) => {
  const [isPlay, setIsPlay] = useState(false)
  const [isPrivate, setIsPrivate] = useState(false)

  // const isPc = useMediaQuery('(min-width: 640px)')

  const ref = useRef<HTMLDivElement>()
  const elementPosition = useRef<ElementPosition>({
    offsetTop: 0,
    offsetBottom: 0,
  })

  const [feedOpened, setFeedOpened] = useState(false)
  const [commentListOpened, setCommentListOpened] = useState(false)

  const handleDetailOpen = () => {
    // if (!isPc) {
    //   return setCommentListOpened(true)
    // }
    setFeedOpened(true)
  }

  useEffect(() => {
    // elementPosition.current.offsetTop = ref.current?.offsetTop
    // elementPosition.current.offsetBottom = ref.current?.offsetTop + ref.current?.offsetHeight
  }, [])

  if (!feed) return null

  const { likeCount, commentCount, resources } = feed

  return (
    <div className="border-b border-gray-300 mb-4 pb-4">
      <Card className="border-none shadow-none rounded-none">
        <PostingHeader profile={feed.owner} createdAt={feed.createdAt} />
        {!isPrivate && (
          <>
            <FeedMedia resources={feed.resources} />
            <FeedButtons feed={feed} onDetailModal={handleDetailOpen} username={username} />
            <LkeList id={feed.id} likeCount={likeCount} />
            <FeedContent username={feed.owner.username} contents={feed.contents} />
          </>
        )}
        <PostingLSubscribeLocker isPrivate={isPrivate} />
      </Card>
    </div>
  )
}

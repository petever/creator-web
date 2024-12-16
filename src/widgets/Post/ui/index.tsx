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
  viewType ?: 'row' | 'grid'

}

interface ElementPosition {
  offsetTop?: number
  offsetBottom?: number
}

export const Post = ({ feed, username, viewType = 'row' }: PostProps) => {
  const [isPrivate, setIsPrivate] = useState(false)

  // const isPc = useMediaQuery('(min-width: 640px)')

  const [feedOpened, setFeedOpened] = useState(false)
  const [commentListOpened, setCommentListOpened] = useState(false)

  const handleDetailOpen = () => {
    // if (!isPc) {
    //   return setCommentListOpened(true)
    // }
    setFeedOpened(true)
  }

  if (!feed) return null

  const { likeCount, commentCount, resources } = feed

  const postStyle = viewType === 'row' ? 'border-gray-300 mb-4 pb-4' : ''

  return (
    <div className={postStyle}>
      <Card className="border-none shadow-none rounded-none">
        {viewType === 'row' && (
          <>
            <PostingHeader profile={feed.owner} createdAt={feed.createdAt} />
            <FeedContent contents={feed.contents} />
          </>
        )}
        {!isPrivate && (
          <>
            <FeedMedia resources={feed.resources} viewType={viewType}
            />
            <FeedButtons feed={feed} onDetailModal={handleDetailOpen} username={username}
             viewType={viewType}
            />
            <LkeList id={feed.id} likeCount={likeCount} />
          </>
        )}
        <PostingLSubscribeLocker isPrivate={isPrivate} />
      </Card>
    </div>
  )
}

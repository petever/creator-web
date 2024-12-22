'use client'
import { FeedButtons, PostingLSubscribeLocker } from '@/features'
import { PostingHeader } from './PostingHeader'
import { FeedContents } from '@/entities/feeds/types'
import { LkeList } from '@/shared/LikeList/ui'
import { FeedContent } from '@/entities/feeds/ui'
import { FeedMedia } from '@/entities/feeds/ui/FeedMedia'
import { useState } from 'react'
import { Card } from '@/shared/ui/card'

interface PostProps {
  feed: FeedContents
  username?: string
  viewType?: 'row' | 'grid'
}

export const Post = ({ feed, username, viewType = 'row' }: PostProps) => {
  const [feedOpened, setFeedOpened] = useState(false)

  const handleDetailOpen = () => {
    setFeedOpened(true)
  }

  if (!feed) return null

  const { likeCount } = feed

  const postStyle = viewType === 'row' ? 'w-full mb-4 pb-4 border-gray-300' : ''

  const isPrivate = !feed.isAuthorizedToView && feed.postStatus !== 'PUBLIC'
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
            <FeedMedia feedId={feed.id} resources={feed.resources} viewType={viewType} />
            <FeedButtons
              feed={feed}
              onDetailModal={handleDetailOpen}
              username={username}
              viewType={viewType}
            />
            <LkeList id={feed.id} likeCount={likeCount} />
          </>
        )}
        <PostingLSubscribeLocker isAuthorizedToView={isPrivate} />
      </Card>
    </div>
  )
}

'use client'
import { FeedContents } from '@/entities/feeds/types'
import { FeedContent } from '@/entities/feeds/ui'
import { FeedMedia } from '@/entities/feeds/ui/FeedMedia'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/dialog'
import { Profile } from '@/features'
import { CommentArea } from '@/widgets'

interface FeedDetailProps {
  feed: FeedContents
}

export const FeedDetail = ({ feed }: FeedDetailProps) => {
  if (feed.commentCount === 0) return null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-gray-500 text-sm">댓글 {feed.commentCount}개 모두 보기</button>
      </DialogTrigger>
      <DialogContent className={'max-w-screen-xl p-0 border-none'}>
        <div className="flex">
          <FeedMedia resources={feed.resources} />
          <div className="flex-1 ">
            <div className="border-b p-2 border-gray-300">
              <Profile profile={feed.owner} />
              <div className="mt-2">
                <FeedContent contents={feed.contents} />
              </div>
            </div>
            <CommentArea id={feed.id} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

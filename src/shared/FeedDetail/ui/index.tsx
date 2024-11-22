'use client'
import { CommentArea } from '@/widgets'
import { FeedContents } from '@/entities/feeds/types'
import { Profile } from '@/features'
import { FeedContent } from '@/entities/feeds/ui'
import { FeedMedia } from '@/entities/feeds/ui/FeedMedia'
import {Dialog, DialogContent, DialogTitle, DialogTrigger} from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'

interface FeedDetailProps {
  feed: FeedContents
}
export const FeedDetail = ({ feed }: FeedDetailProps) => {
  if (feed.commentCount === 0) return null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">댓글 {feed.commentCount}개 모두 보기</Button>
      </DialogTrigger>
      <DialogContent className={'max-w-screen-lg'}>
        <div className={'flex items-start gap-8'}>
          <div className={'flex-1'}>
            <div className={'mb-8'}>
              <Profile profile={feed.owner} />
            </div>
            <div>
              <FeedContent contents={feed.contents} createdAt={feed.createdAt} />
              <FeedMedia resources={feed.resources} />
            </div>
          </div>
					<div className={'flex-1'}>
						<CommentArea id={feed.id} />
					</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

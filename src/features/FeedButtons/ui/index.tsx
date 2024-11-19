'use client'
import { useUpdateLikePosting } from '@/features/FeedButtons/hooks/useUpdateFavoritePosting'
import { FeedContents } from '@/entities/feeds/types'
import { useSession } from 'next-auth/react'
import { CommentListModal, LoginModal } from '@/shared'
import { Button } from '@/shared/ui/button'
import { Heart } from 'lucide-react'

interface FeedButtonsProps {
  feed: FeedContents
  username?: string
  onDetailModal: () => void
}

export const FeedButtons = ({ feed, username, onDetailModal }: FeedButtonsProps) => {
  const { data: session, status } = useSession()
  const { updateLikePostingMutate, data, isError } = useUpdateLikePosting(feed.id, username)

  const { isLiked } = feed


  const handleFavoritePosting = async () => {
    if (isError) {
      // return loginModalOpen()
    }
    updateLikePostingMutate({ ...feed })
  }

  return (
    <div className="px-0 py-2">
      <div class="flex justify-between w-full">
        <div>
          <Button variant="ghost" onClick={handleFavoritePosting}>
            <Heart fill={!isLiked ? 'transparent' : '#000'} />
          </Button>
          <CommentListModal feed={feed} />
        </div>
      </div>
      {/*<LoginModal owner={feed.owner} opened={loginModalOpened} onClose={loginModalClose} />*/}
    </div>
  )
}

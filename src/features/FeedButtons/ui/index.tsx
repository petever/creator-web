'use client'
import { useUpdateLikePosting } from '@/features/FeedButtons/hooks/useUpdateFavoritePosting'
import { FeedContents } from '@/entities/feeds/types'
import { CommentListModal, LoginModal } from '@/shared'
import { Heart } from 'lucide-react'

interface FeedButtonsProps {
  feed: FeedContents
  username?: string
  onDetailModal: () => void
}

export const FeedButtons = ({ feed, username, onDetailModal }: FeedButtonsProps) => {
  const { updateLikePostingMutate, data, isError } = useUpdateLikePosting(feed.id, username)

  const { isLiked } = feed

  const handleFavoritePosting = async () => {
    updateLikePostingMutate({ ...feed })
  }

  return (
    <div className="p-3">
      <div className="flex gap-4">
        <LoginModal owner={feed.owner}>
          <Heart
            size={24}
            className="cursor-pointer hover:text-gray-500"
            fill={!isLiked ? 'transparent' : '#000'}
            onClick={handleFavoritePosting}
          />
        </LoginModal>
        <CommentListModal feed={feed} />
      </div>
    </div>
  )
}

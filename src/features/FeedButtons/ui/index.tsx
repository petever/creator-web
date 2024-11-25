'use client'
import { useUpdateLikePosting } from '@/features/FeedButtons/hooks/useUpdateFavoritePosting'
import { FeedContents } from '@/entities/feeds/types'
import { useSession } from 'next-auth/react'
import { CommentListModal } from '@/shared'
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
    <div className="py-4">
      <div className="flex gap-4">
        <Heart
          size={24}
          className="cursor-pointer hover:text-gray-500"
          fill={!isLiked ? 'transparent' : '#000'}
          onClick={handleFavoritePosting}
        />
        <CommentListModal feed={feed} />
      </div>
      {/*<LoginModal owner={feed.owner} opened={loginModalOpened} onClose={loginModalClose} />*/}
    </div>
  )
}

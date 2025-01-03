'use client'
import { useUpdateLikePosting } from '@/features/FeedButtons/hooks/useUpdateFavoritePosting'
import { FeedContents } from '@/entities/feeds/types'
import { CommentListModal, LoginModal } from '@/shared'
import { Heart } from 'lucide-react'
import {useSession} from "next-auth/react";

interface FeedButtonsProps {
  feed: FeedContents
  username?: string
  onDetailModal: () => void
  viewType?: 'row' | 'grid'
}

export const FeedButtons = ({ feed, username, viewType, onDetailModal }: FeedButtonsProps) => {
  const { updateLikePostingMutate, data, isError } = useUpdateLikePosting(feed.id, username)
  const { data: session, status } = useSession()

  const { isLiked } = feed

  const handleFavoritePosting = async () => {
    console.log('session', session)
    if(status === 'unauthenticated'){
      return 'unauthenticated'
    }

    updateLikePostingMutate({ ...feed })
  }

  if(viewType === 'grid') return null

  return (
    <div className="p-3">
      <div className="flex gap-4">
        <Heart
          size={24}
          className="cursor-pointer hover:text-gray-500"
          fill={!isLiked ? 'transparent' : '#000'}
          onClick={handleFavoritePosting}
        />
        <LoginModal owner={feed.owner}/>
        <CommentListModal feed={feed} />
      </div>
    </div>
  )
}

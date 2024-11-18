'use client'
import { ActionIcon, Avatar, UnstyledButton } from '@mantine/core'
import classes from './styles.module.css'
import { useRouter } from 'next/navigation'
import { useComment } from '@/features/Comment/hooks/useComment'
import { useInView } from 'react-intersection-observer'
import React, { useEffect, useMemo, useState } from 'react'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'
import { CommentTypes } from '@/features/Comment/type'
import { useUpdateFavoriteComment } from '@/features/Comment/hooks/useUpdateFavoriteComment'
import { Heart, MessageCircle } from 'lucide-react'
import { Button } from '@/shared/ui/button'

interface CommentProps {
  id: string
}
export const Comment = ({ id }: CommentProps) => {
  const [isLiked, setIsLiked] = useState(false)

  const { ref, inView } = useInView()

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useComment(id)

  const comments: CommentTypes[] = useMemo(
    () => (data ? data.pages.flatMap(({ content }) => content) : []),
    [data],
  )

  const router = useRouter()

  const { updateLikeCommentMutate, isSuccess } = useUpdateFavoriteComment(id)

  const handleFavoritePosting = async (comment: CommentTypes) => {
    updateLikeCommentMutate(comment)
  }

  const handleMemberPageMove = (name: string) => {
    router.push(`/${name}`)
  }

  const fetchMore = () => {
    if (!inView) {
      return
    }
    void fetchNextPage()
  }

  useEffect(() => {
    fetchMore()
  }, [inView, hasNextPage])

  if (comments.length < 1) {
    return (
      <div className="flex flex-col  gap-4 h-full items-center justify-center">
        <MessageCircle size={40} />
        <p>등록된 댓글이 없습니다.</p>
      </div>
    )
  }

  return (
    <div className={classes.wrapper}>
      {comments.map((comment) => {
        return (
          <div className="flex flex-wrap gap-5 py-5" key={comment.id}>
            <Button
              className={classes.userInfo`flex gap-2 items-center flex-none w-full`}
              onClick={() => handleMemberPageMove(comment.owner.username)}
            >
              <Avatar size="sm" src={comment.owner.picture as string} />
              <span>{comment.owner.displayName}</span>
            </Button>
            <div className={classes.commentWrapper`flex-1 text-left break-words`}>
              {comment.contents}
            </div>
            <Button variant="ghost" onClick={() => handleFavoritePosting(comment)}>
              <div>
                <Heart fill={!isLiked ? 'transparent' : '#000'} />
              </div>
            </Button>
          </div>
        )
      })}
      <div ref={ref}></div>
    </div>
  )
}

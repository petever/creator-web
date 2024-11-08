'use client'
import {ActionIcon, Avatar, UnstyledButton} from '@mantine/core'
import classes from './styles.module.css'
import { useRouter } from 'next/navigation'
import {useComment} from "@/features/Comment/hooks/useComment";
import {useInView} from "react-intersection-observer";
import React, {useEffect, useMemo, useState} from "react";
import {IconHeart, IconHeartFilled} from "@tabler/icons-react";
import {CommentTypes} from "@/features/Comment/type";
import {useUpdateFavoriteComment} from "@/features/Comment/hooks/useUpdateFavoriteComment";

interface CommentProps {
  id : string
}
export const Comment = ({id} : CommentProps) => {
  const [isLiked, setIsLiked] = useState(false)

  const { ref, inView } = useInView()

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useComment(id)

  const comments : CommentTypes[] = useMemo(() => (data ? data.pages.flatMap(({ content }) => content) : []), [data])

  const router = useRouter()

  const { updateLikeCommentMutate, isSuccess } = useUpdateFavoriteComment(id)

  const handleFavoritePosting = async (comment : CommentTypes) => {
    updateLikeCommentMutate(comment)
  }

  const handleMemberPageMove = (name : string) => {
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


  useEffect(() => {
    console.log('isSuccess')
  }, [isSuccess]);

  if(comments.length < 1) return null

  return (
    <div className={classes.wrapper}>
      {comments.map((comment) => {
        return (
          <div className={classes.commentWrapper} key={comment.id}>
            <UnstyledButton className={classes.userInfo} onClick={() => handleMemberPageMove(comment.owner.username)}>
              <Avatar size='sm' src={comment.owner.picture as string}/>
              <span>{comment.owner.displayName}</span>
            </UnstyledButton>
            <div className={classes.contentWrapper}>
              {comment.contents}
            </div>
            <ActionIcon
              variant="subtle"
              size="sm"
              color="gray"
              data-testId="favorite_btn"
              onClick={() => handleFavoritePosting(comment)}
            >
              <div>
                {!isLiked ? <IconHeart size={12}/> : <IconHeartFilled size={12}/>}
              </div>
            </ActionIcon>
          </div>
        )
      })}
      <div ref={ref}></div>
    </div>
  )
}

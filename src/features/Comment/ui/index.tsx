'use client'
import { Avatar, UnstyledButton } from '@mantine/core'
import classes from './styles.module.css'
import { useRouter } from 'next/navigation'
import {useComment} from "@/features/Comment/hooks/useComment";
import {useInView} from "react-intersection-observer";
import {useEffect, useMemo} from "react";
import {getDateFormat} from "@/shared/lib";

interface CommentProps {
  id : string
}
export const Comment = ({id} : CommentProps) => {
  const { ref, inView } = useInView()

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useComment(id)


  const comments : Comment[] = useMemo(() => (data ? data.pages.flatMap(({ content }) => content) : []), [data])

  const router = useRouter()

  const handleMemberPageMove = () => {
    router.push('/3')
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


  if(comments.length < 1) return null

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className={classes.wrapper}>
            <div className={classes.userInfo}>
              <Avatar size='sm' src={comment.owner.picture}/>
              <span>{comment.owner.displayName}</span>
            </div>
            <div>
              {comment.contents}
            </div>
            <div className={classes.date}>{getDateFormat(comment.createdAt)}</div>
          </div>
        )
      })}
    </div>
  )
}

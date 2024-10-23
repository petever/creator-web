'use client'
import { Avatar, UnstyledButton } from '@mantine/core'
import classes from './styles.module.css'
import { useRouter } from 'next/navigation'
import {useComment} from "@/features/Comment/hooks/useComment";
import useFeeds from "@/entities/feeds/hooks/useFeeds";
import {useInView} from "react-intersection-observer";
import {useEffect, useMemo} from "react";

interface CommentProps {
  id : string
}
export const Comment = ({id} : CommentProps) => {
  const { ref, inView } = useInView()

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useComment(id)


  const comments = useMemo(() => (data ? data.pages.flatMap(({ content }) => content) : []), [data])

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
    <UnstyledButton
      variant="transparent"
      color="gray"
      className={classes.wrapper}
      onClick={handleMemberPageMove}
    >
      <Avatar size="sm" radius="xl" color="gray" />
      유저명
    </UnstyledButton>
  )
}

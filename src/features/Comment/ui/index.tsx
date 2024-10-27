'use client'
import {ActionIcon, Avatar, UnstyledButton} from '@mantine/core'
import classes from './styles.module.css'
import { useRouter } from 'next/navigation'
import {useComment} from "@/features/Comment/hooks/useComment";
import {useInView} from "react-intersection-observer";
import {useEffect, useMemo} from "react";
import {IconHeart, IconHeartFilled} from "@tabler/icons-react";

interface CommentProps {
  id : string
}
export const Comment = ({id} : CommentProps) => {
  const { ref, inView } = useInView()

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useComment(id)


  const comments : Comment[] = useMemo(() => (data ? data.pages.flatMap(({ content }) => content) : []), [data])

  const router = useRouter()

  // const { updateLikePostingMutate, data } = useUpdateFavoriteComment(id)

  const isLiked = false

  const handleFavoritePosting = async () => {
    // updateLikeCommentMutate({...feed})
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


  if(comments.length < 1) return null

  return (
    <div className={classes.wrapper}>
      {comments.map((comment) => {
        return (
          <div className={classes.commentWrapper}>
            <UnstyledButton className={classes.userInfo} onClick={() => handleMemberPageMove(comment.owner.username)}>
              <Avatar size='sm' src={comment.owner.picture}/>
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
              onClick={handleFavoritePosting}
            >
              <div>
                {!isLiked ? <IconHeart size={12}/> : <IconHeartFilled size={12}/>}
              </div>
            </ActionIcon>
          </div>
        )
      })}
    </div>
  )
}

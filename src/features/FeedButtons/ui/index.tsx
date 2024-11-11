'use client'
import { ActionIcon, ActionIconGroup, Flex } from '@mantine/core'
import {
  IconHeart,
  IconHeartFilled,
  IconMessageCircle,
} from '@tabler/icons-react'
import {useUpdateLikePosting} from "@/features/FeedButtons/hooks/useUpdateFavoritePosting";
import {FeedContents} from "@/entities/feeds/types";
import classes from './styles.module.css'
import {useSession} from "next-auth/react";
import {CommentListModal, LoginModal} from "@/shared";
import { useDisclosure } from '@mantine/hooks'
import {Button} from "@/shared/ui/button";

interface FeedButtonsProps {
  feed: FeedContents
  username?: string
  onDetailModal: () => void
}

export const FeedButtons = ({ feed, username, onDetailModal }: FeedButtonsProps) => {
  const { data: session, status } = useSession()
  const { updateLikePostingMutate, data, isError} = useUpdateLikePosting(feed.id, username)

  const { isLiked } = feed

  const [ loginModalOpened, { open : loginModalOpen, close : loginModalClose} ] = useDisclosure(false)

  const handleFavoritePosting = async () => {
    if(isError) {
      return loginModalOpen()
    }
    updateLikePostingMutate({...feed})
  }

  return (
    <div className={classes.wrapper}>
      <Flex
        justify="space-between"
        style={{
          width: '100%',
        }}
      >
        <ActionIconGroup>
          <Button
            variant="ghost"
            onClick={handleFavoritePosting}
          >
            {!isLiked ? <IconHeart /> : <IconHeartFilled />}
          </Button>
          <CommentListModal feed={feed}/>
        </ActionIconGroup>
      </Flex>
      <LoginModal
        owner={feed.owner}
        opened={loginModalOpened}
        onClose={loginModalClose}
      />
    </div>
  )
}

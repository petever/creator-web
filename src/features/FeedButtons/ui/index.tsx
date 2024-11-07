import { ActionIcon, ActionIconGroup, Flex, Group } from '@mantine/core'
import {
  IconHeart,
  IconHeartFilled,
  IconMessageCircle,
} from '@tabler/icons-react'
import {useUpdateLikePosting} from "@/features/FeedButtons/hooks/useUpdateFavoritePosting";
import {FeedContents} from "@/entities/feeds/types";
import classes from './styles.module.css'

interface FeedButtonsProps {
  feed: FeedContents
  username?: string
  onDetailModal: () => void
}

export const FeedButtons = ({ feed, username, onDetailModal }: FeedButtonsProps) => {
  const { updateLikePostingMutate, data } = useUpdateLikePosting(feed.id, username)

  const { isLiked } = feed

  const handleFavoritePosting = async () => {
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
          <ActionIcon
            variant="subtle"
            size="xl"
            color="gray"
            data-testId="favorite_btn"
            onClick={handleFavoritePosting}
          >
            <div className={classes.likeWrapper}>
              {!isLiked ? <IconHeart /> : <IconHeartFilled />}
            </div>
          </ActionIcon>
          <ActionIcon variant="subtle" size="xl" color="gray" onClick={onDetailModal}>
            <IconMessageCircle />
          </ActionIcon>
        </ActionIconGroup>
        {/* TODO : 북마크 불필요해보여 삭제 */}
        {/*<Group>*/}
        {/*  <ActionIcon variant="subtle" size="xl" color="gray">*/}
        {/*    /!*<IconBookmark />*!/*/}
        {/*    <IconBookmarkFilled />*/}
        {/*  </ActionIcon>*/}
        {/*</Group>*/}
      </Flex>
    </div>
  )
}

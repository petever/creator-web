import { ActionIcon, ActionIconGroup, Flex, Group } from '@mantine/core'
import {
  IconBookmark,
  IconBookmarkFilled,
  IconHeart,
  IconHeartFilled,
  IconMessageCircle,
  IconShare,
} from '@tabler/icons-react'
import {useUpdateLikePosting} from "@/features/FeedButtons/hooks/useUpdateFavoritePosting";
import {UserProfile} from "@/entities/user/types";
import {FeedContents} from "@/entities/feeds/types";
import classes from './styles.module.css'

interface FeedButtonsProps {
  feed: FeedContents
  onDetailModal: () => void
}

export const FeedButtons = ({ feed, onDetailModal }: FeedButtonsProps) => {
  const { updateLikePostingMutate, data } = useUpdateLikePosting(feed.id)

  const { likeCount } = feed

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
              {/*<IconHeart />*/}
              <IconHeartFilled />
            </div>
          </ActionIcon>
          <ActionIcon variant="subtle" size="xl" color="gray" onClick={onDetailModal}>
            <IconMessageCircle />
          </ActionIcon>
        </ActionIconGroup>
        <Group>
          <ActionIcon variant="subtle" size="xl" color="gray">
            {/*<IconBookmark />*/}
            <IconBookmarkFilled />
          </ActionIcon>
        </Group>
      </Flex>
    </div>
  )
}

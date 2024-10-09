import { ActionIcon, ActionIconGroup, Flex, Group } from '@mantine/core'
import {
  IconBookmark,
  IconBookmarkFilled,
  IconHeart,
  IconHeartFilled,
  IconMessageCircle,
  IconShare,
} from '@tabler/icons-react'

interface FeedButtonsProps {
  id: string
  onDetailModal: () => void
}

export const FeedButtons = ({ id, onDetailModal }: FeedButtonsProps) => {
  // const { updateFavoritePostingMutate, data } = useUpdateFavoritePosting(id)

  const handleFavoritePosting = async () => {
    // updateFavoritePostingMutate()
    // console.log(data)
  }

  return (
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
          {/*<IconHeart />*/}
          <IconHeartFilled />
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
  )
}

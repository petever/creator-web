import { ActionIcon, ActionIconGroup, Flex, Group } from '@mantine/core'
import { IconBookmark, IconHeart, IconMessageCircle, IconShare } from '@tabler/icons-react'

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
          data-testId="favorite_btn"
          variant="subtle"
          size="xl"
          color="gray"
          onClick={handleFavoritePosting}
        >
          <IconHeart />
        </ActionIcon>
        <ActionIcon
          data-testId="detail_btn"
          variant="subtle"
          size="xl"
          color="gray"
          onClick={onDetailModal}
        >
          <IconMessageCircle />
        </ActionIcon>
        <ActionIcon data-testId="share_btn" variant="subtle" size="xl" color="gray">
          <IconShare />
        </ActionIcon>
      </ActionIconGroup>
      <Group>
        <ActionIcon variant="subtle" size="xl" color="gray">
          <IconBookmark />
        </ActionIcon>
      </Group>
    </Flex>
  )
}

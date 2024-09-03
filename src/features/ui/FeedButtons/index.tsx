import { ActionIcon, ActionIconGroup, Flex, Group } from '@mantine/core'
import { IconBookmark, IconHeart, IconMessageCircle, IconShare } from '@tabler/icons-react'

export const FeedButtons = () => {
  return (
    <Flex
      justify="space-between"
      style={{
        width: '100%',
      }}
    >
      <ActionIconGroup>
        <ActionIcon variant="subtle" size="xl" color="gray">
          <IconHeart />
        </ActionIcon>
        <ActionIcon variant="subtle" size="xl" color="gray">
          <IconMessageCircle />
        </ActionIcon>
        <ActionIcon variant="subtle" size="xl" color="gray">
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

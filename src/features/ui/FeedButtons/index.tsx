import {ActionIcon, Group} from "@mantine/core";
import {IconHeart} from "@tabler/icons-react";

export const FeedButtons = () => {
  return (
    <Group>
      <ActionIcon
        variant="gradient"
        size="xl"
        aria-label="Gradient action icon"
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
      >
        <IconHeart />
      </ActionIcon>
      <ActionIcon
        variant="gradient"
        size="xl"
        aria-label="Gradient action icon"
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
      >
        <IconHeart />
      </ActionIcon>
      <ActionIcon
        variant="gradient"
        size="xl"
        aria-label="Gradient action icon"
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
      >
        <IconHeart />
      </ActionIcon>
    </Group>
  )
}

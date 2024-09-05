'use client'
import {Modal, Button, Group, Text} from '@mantine/core';

interface FeedDetailProps {
  opened : boolean
  onClose : () => void
}
export const FeedDetail = ({opened, onClose} : FeedDetailProps) => {
  return (
    <Modal opened={opened} onClose={onClose} title="Authentication" centered>
      <Text>Modal with size auto will fits its content</Text>

      <Group mt="xl">
        <Button >Add badge</Button>
        <Button >Remove badge</Button>
      </Group>
    </Modal>
  )
}

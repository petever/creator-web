import { Badge, Button, Card, Group, NumberFormatter, Popover, Text } from '@mantine/core'
import { IconDotsVertical } from '@tabler/icons-react'

interface SubscribeCardMenuProps {
  isCreator?: boolean
}
const SubscribeCardMenu = ({ isCreator }: SubscribeCardMenuProps) => {
  if (!isCreator) return null
  return (
    <Popover position="bottom" withArrow shadow="md">
      <Popover.Target>
        <IconDotsVertical color="#bbb" />
      </Popover.Target>
      <Popover.Dropdown>삭제</Popover.Dropdown>
    </Popover>
  )
}

export default SubscribeCardMenu
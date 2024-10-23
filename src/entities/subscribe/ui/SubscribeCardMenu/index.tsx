import { Popover } from '@mantine/core'
import { IconDotsVertical } from '@tabler/icons-react'

interface SubscribeCardMenuProps {
  isCreator?: boolean
}

const SubscribeCardMenu = ({ isCreator }: SubscribeCardMenuProps) => {
  if (!isCreator) return null
  return (
    <Popover position="bottom" shadow="md">
      <Popover.Target>
        <IconDotsVertical color="#bbb" />
      </Popover.Target>
      <Popover.Dropdown>삭제</Popover.Dropdown>
    </Popover>
  )
}

export default SubscribeCardMenu

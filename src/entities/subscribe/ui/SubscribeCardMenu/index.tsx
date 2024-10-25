import { Button, Flex, Popover } from '@mantine/core'
import { IconDotsVertical, IconPencil, IconTrash } from '@tabler/icons-react'

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
      <Popover.Dropdown>
        <Flex direction="column">
          <Button
            type="button"
            size="sm"
            leftSection={<IconPencil />}
            variant="transparent"
            color="dark"
          >
            수정
          </Button>
          <Button
            type="button"
            leftSection={<IconTrash />}
            size="sm"
            variant="transparent"
            color="red"
          >
            삭제
          </Button>
        </Flex>
      </Popover.Dropdown>
    </Popover>
  )
}

export default SubscribeCardMenu

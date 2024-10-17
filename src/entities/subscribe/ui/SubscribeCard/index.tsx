import { Badge, Button, Card, Group, NumberFormatter, Popover, Text } from '@mantine/core'
import { IconDotsVertical } from '@tabler/icons-react'

interface SubscribeCardProps {
  name: string
  price: number
  description: string
}
const SubscribeCard = ({ name, price, description }: SubscribeCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="xs">
        <Text fw={500}>{name}</Text>
        <Group gap={4}>
          <Badge color="pink" size="xl">
            <NumberFormatter prefix="₩" value={price} thousandSeparator /> / 월
          </Badge>
          <Popover position="bottom" withArrow shadow="md">
            <Popover.Target>
              <IconDotsVertical color="#bbb" />
            </Popover.Target>
            <Popover.Dropdown>삭제</Popover.Dropdown>
          </Popover>
        </Group>
      </Group>
      <Text size="sm" dangerouslySetInnerHTML={{ __html: description }} />
      <Button fullWidth mt="md" radius="md">
        구독하기
      </Button>
    </Card>
  )
}

export default SubscribeCard

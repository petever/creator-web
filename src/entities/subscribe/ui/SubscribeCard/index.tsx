import { Badge, Button, Card, Group, NumberFormatter, Popover, Text } from '@mantine/core'
import { IconDotsVertical } from '@tabler/icons-react'
import SubscribeCardMenu from '@/entities/subscribe/ui/SubscribeCardMenu'

interface SubscribeCardProps {
  name: string
  price: number
  description: string
  isCreator?: boolean
}
const SubscribeCard = ({ name, price, description, isCreator }: SubscribeCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="xs">
        <Text fw={500}>{name}</Text>
        <Group gap={4}>
          <Badge color="pink" size="xl">
            <NumberFormatter prefix="₩" value={price} thousandSeparator /> / 월
          </Badge>
          <SubscribeCardMenu isCreator={isCreator} />
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

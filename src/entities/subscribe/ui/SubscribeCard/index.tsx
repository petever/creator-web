import { Badge, Button, Card, Group, NumberFormatter, Text } from '@mantine/core'
import SubscribeCardMenu from '@/entities/subscribe/ui/SubscribeCardMenu'
import parse from 'html-react-parser'
import { SubscribePlan } from '@/entities/subscribe/types'
interface SubscribeCardProps {
  plan: SubscribePlan
  isCreator?: boolean
}

const SubscribeCard = ({ plan, isCreator }: SubscribeCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="xs">
        <Text fw={500}>{plan.name}</Text>
        <Group gap={4}>
          <Badge color="pink" size="xl">
            <NumberFormatter prefix="₩" value={plan.price} thousandSeparator /> / 월
          </Badge>
          <SubscribeCardMenu isCreator={isCreator} plan={plan} />
        </Group>
      </Group>
      {parse(plan.description)}
      <Button fullWidth mt="md" radius="md">
        구독하기
      </Button>
    </Card>
  )
}

export default SubscribeCard

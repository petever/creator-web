'use client'

import SubscribeCard from '@/entities/subscribe/ui/SubscribeCard'
import { SubscribePlan } from '@/entities/subscribe/types'
import { useSubscribePlans } from '@/entities/subscribe/hooks/useSubscribePlans'
import { Flex } from '@mantine/core'

interface SubscribeCardListProps {
  userId?: string
  subscribePlans: SubscribePlan[]
}
const SubscribeCardList = ({ userId, subscribePlans }: SubscribeCardListProps) => {
  const { data: plans } = useSubscribePlans(userId, subscribePlans)

  return (
    <Flex gap={20} direction="column">
      {plans?.map((plan: SubscribePlan) => {
        return (
          <SubscribeCard
            key={plan.id}
            price={plan.price}
            name={plan.name}
            description={plan.description}
            isCreator
          />
        )
      })}
    </Flex>
  )
}

export default SubscribeCardList

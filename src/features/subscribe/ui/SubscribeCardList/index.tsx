'use client'

import SubscribeCard from '@/features/subscribe/ui/SubscribeCard'
import { SubscribePlan } from '@/entities/subscribe/types'
import { useSubscribePlans } from '@/entities/subscribe/hooks/useSubscribePlans'
import { Flex } from '@mantine/core'
import { useSession } from 'next-auth/react'
import { useCreatorSubscribe } from '@/features/subscribe/hooks/useCreatorSubscribe'

interface SubscribeCardListProps {
  userId?: string
  subscribePlans?: SubscribePlan[]
  isCreator?: boolean
}

const SubscribeCardList = ({ userId, subscribePlans, isCreator }: SubscribeCardListProps) => {
  const { data: plans } = useSubscribePlans(userId, subscribePlans)
  const { creatorSubscribeMutate } = useCreatorSubscribe(userId)
  const handleSubscribe = (planId: string) => {
    creatorSubscribeMutate(planId)
  }

  return (
    <Flex gap={20} direction="column">
      {plans?.map((plan: SubscribePlan) => {
        return (
          <SubscribeCard
            key={plan.id}
            plan={plan}
            isCreator={isCreator}
            onClick={handleSubscribe}
          />
        )
      })}
    </Flex>
  )
}

export default SubscribeCardList

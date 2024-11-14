'use client'

import SubscribeCard from '@/features/subscribe/ui/SubscribeCard'
import { SubscribePlan } from '@/entities/subscribe/types'
import { useSubscribePlans } from '@/entities/subscribe/hooks/useSubscribePlans'
import { Flex } from '@mantine/core'
import { useSession } from 'next-auth/react'
import { useCreatorSubscribe } from '@/features/subscribe/hooks/useCreatorSubscribe'
import { useUnsubscribe } from '@/features/subscribe/hooks/useUnsubscribe'

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
    <div className="flex flex-col gap-5">
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
    </div>
  )
}

export default SubscribeCardList

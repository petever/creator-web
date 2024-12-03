'use client'

import SubscribeCard from '@/features/subscribe/ui/SubscribeCard'
import { SubscribePlan } from '@/entities/subscribe/types'
import { useCreatorSubscribe } from '@/features/subscribe/hooks/useCreatorSubscribe'

interface SubscribeCardListProps {
  userId?: string
  subscribePlans?: SubscribePlan[]
  isCreator?: boolean
}

const SubscribeCardList = ({ userId, subscribePlans, isCreator }: SubscribeCardListProps) => {
  const { creatorSubscribeMutate } = useCreatorSubscribe(userId)

  const handleSubscribe = (planId: string) => {
    creatorSubscribeMutate(planId)
  }

  return (
    <div className="flex flex-col gap-5">
      {subscribePlans?.map((plan: SubscribePlan) => {
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

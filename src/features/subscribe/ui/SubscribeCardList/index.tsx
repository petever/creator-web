'use client'

import SubscribeCard from '@/features/subscribe/ui/SubscribeCard'
import { SubscribePlan } from '@/entities/subscribe/types'
import { useCreatorSubscribe } from '@/features/subscribe/hooks/useCreatorSubscribe'
import { useUnsubscribe } from '@/features/subscribe/hooks/useUnsubscribe'

interface SubscribeCardListProps {
  userId?: string
  subscribePlans?: SubscribePlan[]
  isCreator?: boolean
  subscribedPlanId?: string
}

const SubscribeCardList = ({
  userId,
  subscribedPlanId,
  subscribePlans,
  isCreator,
}: SubscribeCardListProps) => {
  const { creatorSubscribeMutate } = useCreatorSubscribe(userId)
  const { unSubscribeMutate } = useUnsubscribe(userId)

  const handleSubscribe = (planId: string) => {
    creatorSubscribeMutate(planId)
  }
  const handleUnsubscribe = (id: string) => {
    unSubscribeMutate(id)
  }

  const hasMembership = subscribePlans?.some((plan) => plan.id === subscribedPlanId)
  return (
    <div className="flex flex-col gap-5">
      {subscribePlans?.map((plan: SubscribePlan) => {
        const isSubscribed = plan.id === subscribedPlanId
        return (
          <SubscribeCard
            key={plan.id}
            plan={plan}
            isCreator={isCreator}
            hasMembership={hasMembership}
            isSubscribed={isSubscribed}
            onClick={isSubscribed ? handleUnsubscribe : handleSubscribe}
          />
        )
      })}
    </div>
  )
}

export default SubscribeCardList

'use client'

import React from 'react'
import AddSubscribePlan from '@/features/subscribe/ui/AddSubscribePlan'
import SubscribeCardList from '@/features/subscribe/ui/SubscribeCardList'
import { useSubscribePlans } from '@/entities/subscribe/hooks/useSubscribePlans'
import { SubscribePlan } from '@/entities/subscribe/types'

interface AddSubscribePlanListProps {
  userId?: string
  subscribePlans?: SubscribePlan[]
}

const AddSubscribePlanList = ({ userId, subscribePlans }: AddSubscribePlanListProps) => {
  const { data: plans } = useSubscribePlans(userId, subscribePlans)
  const MAX_COUNT = 5
  const isNotAdded = plans?.length === MAX_COUNT
  return (
    <div className="p-3">
      <SubscribeCardList userId={userId} subscribePlans={plans} isCreator />
      <AddSubscribePlan isNotAdded={isNotAdded} />
    </div>
  )
}

export default AddSubscribePlanList

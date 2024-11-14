import React from 'react'
import AddSubscribePlan from '@/features/subscribe/ui/AddSubscribePlan'
import SubscribeCardList from '../../features/subscribe/ui/SubscribeCardList'
import { getServerSubscribePlans } from '@/entities/subscribe/api/getServerSubscribePlans'
import { auth } from '@/auth'

const SubscribePlanSetting = async () => {
  const session = await auth()
  const subscribePlans = await getServerSubscribePlans(session?.user?.id)
  return (
    <div className="max-w-[600px] w-full pt-5 pb-5">
      <SubscribeCardList userId={session?.user?.id} subscribePlans={subscribePlans} isCreator />
      <AddSubscribePlan />
    </div>
  )
}

export default SubscribePlanSetting

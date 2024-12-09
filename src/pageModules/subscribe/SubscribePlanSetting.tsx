import React from 'react'
import { auth } from '@/auth'
import { Header } from '@/shared/ui/header'
import AddSubscribePlanList from '@/widgets/subscribe/ui/AddSubscribePlanList'
import { getSubscribePlans } from '@/entities/subscribe/api/getSubscribePlans'

const SubscribePlanSetting = async () => {
  const session = await auth()
  const subscribePlans = await getSubscribePlans(session?.user?.id)
  return (
    <div>
      <Header text="구독 플랜 설정" isBorder isBack align="center" />
      <AddSubscribePlanList userId={session?.user?.id} subscribePlans={subscribePlans} />
    </div>
  )
}

export default SubscribePlanSetting

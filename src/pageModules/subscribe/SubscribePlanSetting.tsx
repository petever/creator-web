import React from 'react'
import { getServerSubscribePlans } from '@/entities/subscribe/api/getServerSubscribePlans'
import { auth } from '@/auth'
import { Header } from '@/shared/ui/header'
import AddSubscribePlanList from '@/widgets/subscribe/ui/AddSubscribePlanList'

const SubscribePlanSetting = async () => {
  const session = await auth()
  const subscribePlans = await getServerSubscribePlans(session?.user?.id)
  return (
    <div className=" w-full pt-5 pb-5 max-w-screen-sm">
      <Header text="구독 플랜 설정" isBorder isBack align="center" />
      <AddSubscribePlanList userId={session?.user?.id} subscribePlans={subscribePlans} />
    </div>
  )
}

export default SubscribePlanSetting

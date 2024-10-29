import React from 'react'
import { Box } from '@mantine/core'
import AddSubscribePlan from '@/features/subscribe/ui/AddSubscribePlan'
import SubscribeCardList from '../../features/subscribe/ui/SubscribeCardList'
import { getServerSubscribePlans } from '@/entities/subscribe/api/getServerSubscribePlans'
import { auth } from '@/auth'

const SubscribePlanSetting = async () => {
  const session = await auth()
  const subscribePlans = await getServerSubscribePlans(session?.user?.id)
  return (
    <Box pt={20} pb={20} w="100%" maw="400px">
      <SubscribeCardList userId={session?.user?.id} subscribePlans={subscribePlans} isCreator />
      <AddSubscribePlan />
    </Box>
  )
}

export default SubscribePlanSetting

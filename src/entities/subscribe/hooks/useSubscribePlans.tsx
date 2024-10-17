import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getProfile } from '@/entities/user/api/getProfile'
import { UserProfile } from '@/entities/user/types'
import { getUser } from '@/entities/user/api/getUser'
import { SubscribePlan } from '@/entities/subscribe/types'
import { getSubscribePlans } from '@/entities/subscribe/api/getSubscribePlans'
import { getSession } from 'next-auth/react'

export const useSubscribePlans = (userId?: string, initialData?: SubscribePlan[]) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.SUBSCRIBE_PLANS, userId],
    queryFn: () => getSubscribePlans(userId),
    initialData,
    enabled: !!userId,
  })

  return { data }
}

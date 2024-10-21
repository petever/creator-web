import { serverKy } from '@/shared/core/serverKy'
import { API_URL } from '@/shared/constants/apiURL'

export const getServerSubscribePlans = async (userId?: string) => {
  return serverKy
    .get(API_URL.SUBSCRIBER_PLANS, {
      searchParams: {
        userId,
      },
    })
    .json()
}

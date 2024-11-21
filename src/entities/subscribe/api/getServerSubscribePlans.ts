import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const getServerSubscribePlans = async (userId?: string) => {
  return httpKy
    .get(API_URL.SUBSCRIBER_PLANS, {
      searchParams: {
        userId,
      },
    })
    .json()
}

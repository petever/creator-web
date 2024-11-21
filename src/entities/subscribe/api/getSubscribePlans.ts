import { API_URL } from '@/shared/constants/apiURL'

export const getSubscribePlans = async (userId?: string) => {
  return clientKy
    .get(API_URL.SUBSCRIBER_PLANS, {
      searchParams: {
        userId: userId,
      },
    })
    .json()
}

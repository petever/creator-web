import { API_URL } from '@/shared/constants/apiURL'
import { clientKy } from '@/shared/core/clientKy'

export const getSubscribe = async (userId?: string) => {
  return clientKy
    .get(API_URL.SUBSCRIBERS, {
      searchParams: {
        userId: userId,
      },
    })
    .json()
}

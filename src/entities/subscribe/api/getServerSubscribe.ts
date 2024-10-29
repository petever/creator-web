import { API_URL } from '@/shared/constants/apiURL'
import { clientKy } from '@/shared/core/clientKy'
import { serverKy } from '@/shared/core/serverKy'

export const getServerSubscribe = async (userId?: string) => {
  return serverKy
    .get(API_URL.SUBSCRIBERS, {
      searchParams: {
        userId: userId,
      },
    })
    .json()
}

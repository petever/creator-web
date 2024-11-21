import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const getServerSubscribe = async (userId?: string) => {
  return httpKy
    .get(API_URL.SUBSCRIBERS, {
      searchParams: {
        userId: userId,
      },
    })
    .json()
}

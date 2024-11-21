import { API_URL } from '@/shared/constants/apiURL'

export const getSubscribe = async (userId?: string) => {
  return clientKy
    .get(API_URL.SUBSCRIBERS, {
      searchParams: {
        userId: userId,
      },
    })
    .json()
}

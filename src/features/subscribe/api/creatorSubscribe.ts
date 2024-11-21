import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const creatorSubscribe = async (planId: string) => {
  return await httpKy.post(API_URL.SUBSCRIBERS, {
    json: {
      planId,
    },
  })
}

import { clientKy } from '@/shared/core/clientKy'
import { API_URL } from '@/shared/constants/apiURL'
import { AddSubscribePlan } from '@/features/subscribe/types'

export const creatorSubscribe = async (planId: string) => {
  return await clientKy.post(API_URL.SUBSCRIBERS, {
    json: {
      planId,
    },
  })
}

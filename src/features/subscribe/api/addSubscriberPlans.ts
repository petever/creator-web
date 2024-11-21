import { API_URL } from '@/shared/constants/apiURL'
import { AddSubscribePlan } from '@/features/subscribe/types'
import { httpKy } from '@/shared/core/httpKy'

export const addSubscriberPlans = async (plan: AddSubscribePlan) => {
  return await httpKy.post(API_URL.SUBSCRIBER_PLANS, {
    json: plan,
  })
}

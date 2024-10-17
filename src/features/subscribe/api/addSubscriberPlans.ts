import { clientKy } from '@/shared/core/clientKy'
import { API_URL } from '@/shared/constants/apiURL'
import { AddSubscribePlan } from '@/features/subscribe/types'

export const addSubscriberPlans = async (plan: AddSubscribePlan) => {
  return await clientKy.post(API_URL.SUBSCRIBER_PLANS, {
    json: plan,
  })
}

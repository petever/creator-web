import { API_URL } from '@/shared/constants/apiURL'
import { AddSubscribePlan } from '@/features/subscribe/types'
import { httpKy } from '@/shared/core/httpKy'

export const editSubscriberPlans = async (id: string, plan: AddSubscribePlan) => {
  return await httpKy.patch(`${API_URL.SUBSCRIBER_PLANS}/${id}`, { json: plan }).json()
}

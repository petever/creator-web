import { clientKy } from '@/shared/core/clientKy'
import { API_URL } from '@/shared/constants/apiURL'
import { AddSubscribePlan } from '@/features/subscribe/types'

export const editSubscriberPlans = async (id: string, plan: AddSubscribePlan) => {
  return await clientKy.patch(`${API_URL.SUBSCRIBER_PLANS}/${id}`, { json: plan }).json()
}

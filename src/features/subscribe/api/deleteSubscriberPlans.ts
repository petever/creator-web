import { clientKy } from '@/shared/core/clientKy'
import { API_URL } from '@/shared/constants/apiURL'
import { AddSubscribePlan } from '@/features/subscribe/types'

export const deleteSubscriberPlans = async (id: string) => {
  return await clientKy.delete(`${API_URL.SUBSCRIBER_PLANS}/${id}`)
}

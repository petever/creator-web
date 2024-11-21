import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const deleteSubscriberPlans = async (id: string) => {
  return await httpKy.delete(`${API_URL.SUBSCRIBER_PLANS}/${id}`)
}

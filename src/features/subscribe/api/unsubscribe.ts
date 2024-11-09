import { clientKy } from '@/shared/core/clientKy'
import { API_URL } from '@/shared/constants/apiURL'
import { AddSubscribePlan } from '@/features/subscribe/types'

export const unsubscribe = async (id: string) => {
  return await clientKy.delete(`${API_URL.SUBSCRIBERS}/${id}`)
}

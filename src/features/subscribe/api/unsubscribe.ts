import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const unsubscribe = async (subscriberPlanId: string) => {
  return await httpKy.delete(`${API_URL.SUBSCRIBERS}`, {
    searchParams: {
      subscriberPlanId,
    },
  })
}

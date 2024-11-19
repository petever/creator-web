import { clientKy } from '@/shared/core/clientKy'
import { API_URL } from '@/shared/constants/apiURL'

export const updateLikePosting = (id: string): any => {
  return clientKy.post(API_URL.FEED_LIKE(id))
}

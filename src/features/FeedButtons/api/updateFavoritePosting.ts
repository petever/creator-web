import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const updateLikePosting = (id: string): any => {
  return httpKy.post(API_URL.FEED_LIKE(id))
}

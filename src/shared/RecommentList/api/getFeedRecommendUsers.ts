import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const getFeedRecommendUsers = async () => {
  return await httpKy.get(API_URL.FEEDS_RECOMMEND_USERS).json()
}

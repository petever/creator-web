import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const getServerFeedRecommendUsers = async () => {
  return await httpKy.get(API_URL.FEEDS_RECOMMEND_USERS).json()
}

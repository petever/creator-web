import { API_URL } from '@/shared/constants/apiURL'
import { apiService } from '@/shared/core/apiService'

export const getFeeds = async () => {
  return apiService.get(API_URL.FEEDS).json()
}

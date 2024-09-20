import { API_URL } from '@/shared/constants/apiURL'
import { apiService } from '@/shared/core/apiService'
import { Feeds } from '@/entities/feeds/types'

export const getFeeds = async (): Promise<Feeds> => {
  return apiService.get(API_URL.FEEDS).json()
}

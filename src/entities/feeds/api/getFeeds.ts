import { API_URL } from '@/shared/constants/apiURL'
import { Feeds } from '@/entities/feeds/types'
import { clientKy } from '@/shared/core/clientKy'

export const getFeeds = async (userName ?: string): Promise<Feeds> => {
  return clientKy.get(API_URL.FEEDS(userName)).json()
}

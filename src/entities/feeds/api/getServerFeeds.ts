import { API_URL } from '@/shared/constants/apiURL'
import { Feeds } from '@/entities/feeds/types'
import { serverKy } from '@/shared/core/serverKy'

export const getServerFeeds = async (userName ?: string): Promise<Feeds> => {
  return serverKy.get(API_URL.FEEDS(userName)).json()
}

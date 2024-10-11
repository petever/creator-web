import { API_URL } from '@/shared/constants/apiURL'
import {FeedResponse, Feeds} from '@/entities/feeds/types'
import { serverKy } from '@/shared/core/serverKy'

export const getServerFeeds = async (userName ?: string): Promise<Feeds> => {
  return serverKy.get<FeedResponse>(API_URL.FEEDS(userName)).json()
}

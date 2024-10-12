import { API_URL } from '@/shared/constants/apiURL'
import {FeedPageable, FeedResponse, Feeds} from '@/entities/feeds/types'
import { clientKy } from '@/shared/core/clientKy'

export const getFeeds = async (pageParams : FeedPageable, userName ?: string, ): Promise<Feeds> => {
  return await clientKy.get<FeedResponse>(API_URL.FEEDS(userName, pageParams)).json()
}

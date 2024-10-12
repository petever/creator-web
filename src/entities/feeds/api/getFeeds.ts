import { API_URL } from '@/shared/constants/apiURL'
import { Feeds, FeedSearchParams } from '@/entities/feeds/types'
import { clientKy } from '@/shared/core/clientKy'

export const getFeeds = async (searchParams?: FeedSearchParams): Promise<Feeds> => {
  return await clientKy
    .get<Feeds>(API_URL.FEEDS, {
      searchParams,
    })
    .json()
}

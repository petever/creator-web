import { API_URL } from '@/shared/constants/apiURL'
import { Feeds } from '@/entities/feeds/types'
import { serverKy } from '@/shared/core/serverKy'

export const getServerFeeds = async (username?: string): Promise<Feeds> => {
  return serverKy
    .get<Feeds>(API_URL.FEEDS, {
      searchParams: {
        // username,
        page: 0,
        size: 1,
      },
    })
    .json()
}

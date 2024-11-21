import { API_URL } from '@/shared/constants/apiURL'
import { FeedResponse, Feeds } from '@/entities/feeds/types'
import { getFeedSearchParams } from '@/entities/feeds/lib'
import { httpKy } from '@/shared/core/httpKy'

export const getServerFeeds = async (username?: string): Promise<FeedResponse> => {
  const result = await httpKy
    .get<Feeds>(API_URL.FEEDS, {
      searchParams: getFeedSearchParams(username),
    })
    .json()

  const { content, last, number } = result

  return {
    content,
    last,
    number,
  }
}

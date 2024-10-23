import { API_URL } from '@/shared/constants/apiURL'
import {FeedResponse, Feeds} from '@/entities/feeds/types'
import { serverKy } from '@/shared/core/serverKy'
import { getFeedSearchParams } from '@/entities/feeds/lib'

export const getServerFeeds = async (username?: string): Promise<FeedResponse> => {
  const result =  await serverKy
    .get<Feeds>(API_URL.FEEDS, {
      searchParams: getFeedSearchParams(username),
    })
    .json()

  const { content, last, number } = result

  return {
    content,
    last,
    number
  }
}

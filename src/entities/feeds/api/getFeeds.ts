import { API_URL } from '@/shared/constants/apiURL'
import { FeedResponse, Feeds, FeedSearchParams } from '@/entities/feeds/types'
import { httpKy } from '@/shared/core/httpKy'

export const getFeeds = async ({
  pageParam,
}: {
  pageParam: FeedSearchParams
}): Promise<FeedResponse> => {
  const result = await httpKy
    .get<Feeds>(API_URL.FEEDS, {
      searchParams: pageParam,
    })
    .json()

  const { content, last, number } = result

  return {
    content,
    last,
    number,
  }
}

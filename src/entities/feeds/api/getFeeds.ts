import { API_URL } from '@/shared/constants/apiURL'
import {FeedResponse, Feeds, FeedSearchParams} from '@/entities/feeds/types'
import { clientKy } from '@/shared/core/clientKy'

export const getFeeds = async ({pageParam} : { pageParam: FeedSearchParams}): Promise<FeedResponse> => {

  const result =  await clientKy
    .get<Feeds>(API_URL.FEEDS, {
      searchParams : pageParam,
    })
    .json()

  const { content, last, number } = result

  return {
    content,
    last,
    number
  }
}

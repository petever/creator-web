import { API_URL } from '@/shared/constants/apiURL'
import {FeedContents, Feeds} from '@/entities/feeds/types'
import { httpKy } from '@/shared/core/httpKy'

export const getServerFeedDetail = async (id : string): Promise<any> => {
  return await httpKy
    .get<FeedContents>(API_URL.FEED_DETAIL(id))
    .json()
}

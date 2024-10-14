import { API_URL } from '@/shared/constants/apiURL'
import { Feeds } from '@/entities/feeds/types'
import { serverKy } from '@/shared/core/serverKy'
import {getFeedSearchParams} from "@/entities/feeds/lib";

export const getServerFeeds = async (username?: string): Promise<Feeds> => {
  return serverKy
    .get<Feeds>(API_URL.FEEDS, getFeedSearchParams(username))
    .json()
}

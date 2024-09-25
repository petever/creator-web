import { API_URL } from '@/shared/constants/apiURL'
import { Feeds } from '@/entities/feeds/types'
import { serverKy } from '@/shared/core/serverKy'
import { clientKy } from '@/shared/core/clientKy'

export const getFeeds = async (): Promise<Feeds> => {
  return clientKy.get(API_URL.FEEDS).json()
}

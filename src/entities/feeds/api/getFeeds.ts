import { alova } from '@/shared/model/alova'
import { API_URL } from '@/shared/constants/apiURL'

export const getFeeds = async () => {
  return alova.Get(API_URL.FEEDS)
}

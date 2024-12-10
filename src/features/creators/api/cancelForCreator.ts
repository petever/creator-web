import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const cancelForCreator = () => {
  return httpKy.delete(API_URL.CREATOR_APPLES)
}

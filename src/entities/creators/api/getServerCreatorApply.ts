import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const getServerCreatorApply = async () => {
  return await httpKy.get(API_URL.CREATOR).json()
}

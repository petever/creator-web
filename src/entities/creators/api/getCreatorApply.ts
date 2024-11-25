import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const getCreatorApply = async () => {
  return await httpKy.get(API_URL.CREATOR).json()
}

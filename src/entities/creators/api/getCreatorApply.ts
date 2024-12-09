import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'
import { ApplyForCreator } from '@/entities/creators/types/applyForCreator'

export const getCreatorApply = async (): Promise<ApplyForCreator> => {
  return await httpKy.get(API_URL.CREATOR).json()
}

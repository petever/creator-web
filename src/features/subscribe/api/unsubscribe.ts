import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const unsubscribe = async (id: string) => {
  return await httpKy.delete(`${API_URL.SUBSCRIBERS}/${id}`)
}

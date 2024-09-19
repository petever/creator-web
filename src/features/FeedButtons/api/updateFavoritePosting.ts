import { apiService } from '@/shared/core/apiService'

export const updateFavoritePosting = (id: string): any => {
  return apiService.post(`/feed/favorite/${id}`)
}

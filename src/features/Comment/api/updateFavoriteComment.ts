import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const updateFavoriteComment = (id: string, commentId: string): any => {
  return httpKy.post(API_URL.COMMENT_LIKE(id, commentId))
}

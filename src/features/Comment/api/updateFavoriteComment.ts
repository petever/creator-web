import { clientKy } from '@/shared/core/clientKy'
import { API_URL } from '@/shared/constants/apiURL'

export const updateFavoriteComment = (id: string, commentId: string): any => {
  return clientKy.post(API_URL.COMMENT_LIKE(id, commentId))
}

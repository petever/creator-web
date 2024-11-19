import { API_URL } from '@/shared/constants/apiURL'
import { clientKy } from '@/shared/core/clientKy'
import { CommentSubmit } from '@/features/Comment/type'

export const addComment = async (id: string, payload: CommentSubmit) => {
  return await clientKy.post(API_URL.POSTS_COMMENTS(id), {
    json: payload,
  })
}

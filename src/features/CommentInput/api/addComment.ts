import { API_URL } from '@/shared/constants/apiURL'
import { CommentSubmit } from '@/features/Comment/type'
import { httpKy } from '@/shared/core/httpKy'

export const addComment = async (id: string, payload: CommentSubmit) => {
  return await httpKy.post(API_URL.POSTS_COMMENTS(id), {
    json: payload,
  })
}

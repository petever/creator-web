import { API_URL } from '@/shared/constants/apiURL'
import { CommentSearchParams } from '@/features/Comment/type'
import { httpKy } from '@/shared/core/httpKy'

export const getComment = async (id: string, pageParam: CommentSearchParams) => {
  return await httpKy
    .get(API_URL.FEEDS_COMMENT(id), {
      searchParams: pageParam,
    })
    .json()
}

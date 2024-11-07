import {clientKy} from "@/shared/core/clientKy";
import {API_URL} from "@/shared/constants/apiURL";
import {CommentResponse, CommentSearchParams} from "@/features/Comment/type";

export const getComment = async (id : string, searchParams: CommentSearchParams) : Promise<CommentResponse>  => {
  const result = await clientKy.get(API_URL.FEEDS_COMMENT(id),{
    searchParams
  }).json()

  const { content, last, number } = result

  return {
    content,
    last,
    number
  }
}

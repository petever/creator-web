import {clientKy} from "@/shared/core/clientKy";
import {API_URL} from "@/shared/constants/apiURL";
import {CommentSearchParams} from "@/features/Comment/type";

export const getComment = async (id : string,  pageParam: CommentSearchParams) => {
  return await clientKy.get(API_URL.FEEDS_COMMENT(id), {
    searchParams : pageParam,
  }).json()
}

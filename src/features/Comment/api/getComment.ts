import {clientKy} from "@/shared/core/clientKy";
import {API_URL} from "@/shared/constants/apiURL";
import {FeedSearchParams} from "@/entities/feeds/types";
import {CommentSearchParams} from "@/features/Comment/type";

export const getComment = async (id : string,  pageParam: CommentSearchParams) => {
  console.log('pageParam', pageParam)
  const result =  clientKy.get(API_URL.FEEDS_COMMENT(id), {
    searchParams : pageParam,
  }).json()

  return result
}

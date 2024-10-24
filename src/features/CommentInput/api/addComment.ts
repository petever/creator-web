import {API_URL} from "@/shared/constants/apiURL";
import {clientKy} from "@/shared/core/clientKy";

export const addComment = async (id : string, payload : string) => {
  return await clientKy.post(API_URL.POSTS_COMMENTS(id), payload)
}

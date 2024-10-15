import {API_URL} from "@/shared/constants/apiURL";
import {clientKy} from "@/shared/core/clientKy";
import {AddComment} from "@/features/CommentInput/types";

export const addComment = async (id : string, payload : AddComment) => {
  return await clientKy.post(API_URL.COMMENTS(id), payload)
}

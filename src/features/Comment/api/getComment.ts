import {clientKy} from "@/shared/core/clientKy";
import {API_URL} from "@/shared/constants/apiURL";

export const getComment = async (id : string) => {
  return clientKy.get(API_URL.FEEDS_COMMENT(id)).json()
}

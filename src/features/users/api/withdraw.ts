import {httpKy} from "@/shared/core/httpKy";
import {API_URL} from "@/shared/constants/apiURL";

export const withdraw = async () => {
  return await httpKy.delete(API_URL.USERS)

}
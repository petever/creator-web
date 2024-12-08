import {httpKy} from "@/shared/core/httpKy";
import {API_URL} from "@/shared/constants/apiURL";

export const passwordReset = async (payload: FormData) => {
  return httpKy
    .post(API_URL.USERS_PASSWORD_RESET, {
      body: payload,
    })
    .json()
}

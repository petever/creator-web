import {httpKy} from "@/shared/core/httpKy";
import {API_URL} from "@/shared/constants/apiURL";

export const passwordReset = async (payload: string) => {
  return httpKy
    .post(API_URL.USERS_PASSWORD_RESET, {
      headers: {
        'content-type': 'application/json'
      },
      body: payload,
    })
}

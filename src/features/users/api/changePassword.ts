import {httpKy} from "@/shared/core/httpKy";
import {API_URL} from "@/shared/constants/apiURL";
import {ChangePasswordRequest} from "@/features/users/type/auth";

export const changePassword = async (payload : ChangePasswordRequest) => {
  return await httpKy.patch(API_URL.USERS, {
    headers: {
      'Content-Type': 'application/json'
    },
    body : payload
  })
}
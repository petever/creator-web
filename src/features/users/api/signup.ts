import { API_URL } from '@/shared/constants/apiURL'
import { SignupRequest } from '@/features/users/type/auth'
import { httpKy } from '@/shared/core/httpKy'

export const signup = async (payload: SignupRequest) => {
  return await httpKy.post(API_URL.USERS_SIGNUP, { json: payload }).json()
}

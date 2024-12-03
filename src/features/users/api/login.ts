import { API_URL } from '@/shared/constants/apiURL'
import { LoginRequest, LoginResponse } from '@/features/users/type/auth'
import { httpKy } from '@/shared/core/httpKy'

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return await httpKy.post(API_URL.USERS_LOGIN, { json: data }).json()
}

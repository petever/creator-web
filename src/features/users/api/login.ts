import { API_URL } from '@/shared/constants/apiURL'
import { LoginRequest, LoginResponse } from '@/features/users/type/login'
import { serverKy } from '@/shared/core/serverKy'

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return await serverKy.post(API_URL.USERS_LOGIN, { json: data }).json()
}

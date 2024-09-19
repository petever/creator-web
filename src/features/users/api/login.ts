import { API_URL } from '@/shared/constants/apiURL'
import { LoginRequest, LoginResponse } from '@/features/users/type'
import { apiService } from '@/shared/core/apiService'

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return apiService.post(API_URL.USERS_LOGIN, { json: data }).json()
}

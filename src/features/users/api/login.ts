import { alova } from '@/shared/model/alova'
import { API_URL } from '@/shared/constants/apiURL'
import { LoginRequest, LoginResponse } from '@/features/users/type'

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return alova.Post(API_URL.USERS_LOGIN, data)
}

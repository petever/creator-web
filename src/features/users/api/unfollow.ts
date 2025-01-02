import { API_URL } from '@/shared/constants/apiURL'
import { LoginResponse } from '@/features/users/type/auth'
import { httpKy } from '@/shared/core/httpKy'

export const unfollow = async (id: string): Promise<LoginResponse> => {
  return await httpKy.delete(API_URL.FOLLOW(id)).json()
}

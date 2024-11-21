import { API_URL } from '@/shared/constants/apiURL'
import { UserProfile } from '@/entities/user/types'
import { httpKy } from '@/shared/core/httpKy'

export const getServerUser = async (username?: string): Promise<UserProfile> => {
  return httpKy.get(API_URL.USERS_USER(username)).json()
}

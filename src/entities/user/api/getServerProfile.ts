import { API_URL } from '@/shared/constants/apiURL'
import { UserProfile } from '@/entities/user/types'
import { httpKy } from '@/shared/core/httpKy'

export const getServerProfile = async (): Promise<UserProfile> => {
  return httpKy.get(API_URL.USERS_PROFILE).json()
}

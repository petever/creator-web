import { API_URL } from '@/shared/constants/apiURL'
import { serverKy } from '@/shared/core/serverKy'
import { UserProfile } from '@/entities/user/types'

export const getServerProfile = async (): Promise<UserProfile> => {
  return serverKy.get(API_URL.USERS_PROFILE).json()
}

import { API_URL } from '@/shared/constants/apiURL'
import { clientKy } from '@/shared/core/clientKy'
import { UserProfile } from '@/entities/user/types'

export const getProfile = async (): Promise<UserProfile> => {
  return clientKy.get(API_URL.USERS_PROFILE).json()
}

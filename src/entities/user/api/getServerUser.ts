import { API_URL } from '@/shared/constants/apiURL'
import { serverKy } from '@/shared/core/serverKy'
import { UserProfile } from '@/entities/user/types'

export const getServerUser = async (username?: string): Promise<UserProfile> => {
  return serverKy.get(API_URL.USERS_USER(username)).json()
}

import { API_URL } from '@/shared/constants/apiURL'
import { UserProfile } from '@/entities/user/types'
import { clientKy } from '@/shared/core/clientKy'

export const getUser = async (username?: string): Promise<UserProfile> => {
  return clientKy.get(API_URL.USERS_USER(username)).json()
}

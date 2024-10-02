import { API_URL } from '@/shared/constants/apiURL'
import { clientKy } from '@/shared/core/clientKy'
import { UserProfile } from '@/entities/user/types'
import { UpdateProfile } from '@/features/users/type/profile'

export const updateProfile = async (profile: UpdateProfile): Promise<UserProfile> => {
  return await clientKy
    .patch(API_URL.USERS_PROFILE, {
      json: profile,
    })
    .json()
}

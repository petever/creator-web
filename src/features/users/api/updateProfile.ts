import { API_URL } from '@/shared/constants/apiURL'
import { UpdateProfile } from '@/features/users/type/profile'
import { httpKy } from '@/shared/core/httpKy'

export const updateProfile = async (profile: FormData): Promise<UpdateProfile> => {
  return await httpKy
    .patch(API_URL.USERS_PROFILE, {
      body: profile,
    })
    .json()
}

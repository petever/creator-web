import { API_URL } from '@/shared/constants/apiURL'
import { UpdateProfile } from '@/features/users/type/profile'

export const updateProfile = async (profile: FormData): Promise<UpdateProfile> => {
  return await clientKy
    .patch(API_URL.USERS_PROFILE, {
      body: profile,
    })
    .json()
}

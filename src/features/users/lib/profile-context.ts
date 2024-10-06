import { createFormContext } from '@mantine/form'
import { UserProfile } from '@/entities/user/types'

type UserProfileForm = Omit<UserProfile, 'id' | 'role'>
export const [UserProfileFormProvider, useUserProfileFormContext, useUserProfileForm] =
  createFormContext<UserProfileForm>()

import { UserProfile } from '@/entities/user/types'

export type UpdateProfile = Pick<UserProfile, 'displayName' | 'username' | 'status'>

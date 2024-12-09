import { UserProfile } from '@/entities/user/types'

export interface SNS {
  snsType: string
  snsId: string
}

export interface ApplyForCreator {
  creator: {
    id: string
    isApproved: boolean
    user: UserProfile
  }
  creatorApplies: CreatorApply[]
}

export interface CreatorApply {
  snsId: string
  snsType: string
  applyDate: Date
}

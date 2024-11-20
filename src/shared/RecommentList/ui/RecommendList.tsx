'use client'
import { UserProfile } from '@/entities/user/types'
import { Profile } from '@/features'

interface RecommendListProps {
  recommends: UserProfile[]
}

export const RecommendList = ({ recommends }: RecommendListProps) => {
  return (
    <div className="p-4 rounded-lg bg-gray-200">
      <h3 className="mb-6">회원님을 위한 추천</h3>
      <div className="flex flex-wrap flex-col gap-8">
        {recommends.map((user) => {
          return <Profile key={user.id} profile={user} isSubscribed />
        })}
      </div>
    </div>
  )
}

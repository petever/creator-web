'use client'
import { UserProfile } from '@/entities/user/types'
import { Profile } from '@/features'
import Link from 'next/link'
import { PAGE } from '@/shared/constants/page'

interface RecommendListProps {
  recommends: UserProfile[]
}

export const RecommendList = ({ recommends }: RecommendListProps) => {
  return (
    <div className="w-full max-w-screen p-5  rounded-lg bg-gray-100 md:max-w-80">
      <h3 className="mb-6 font-black">회원님을 위한 추천</h3>
      <div className="flex flex-wrap flex-col gap-8">
        {recommends.map((user) => {
          return (
            <Link href={PAGE.MEMBER_PAGE(user.username)}>
              <Profile key={user.id} profile={user} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

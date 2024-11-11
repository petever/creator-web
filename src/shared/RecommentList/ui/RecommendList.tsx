'use client'
import { UserProfile } from '@/entities/user/types'
import { Profile } from '@/features'
import { Box, Title } from '@mantine/core'

interface RecommendListProps {
  recommends: UserProfile[]
}

export const RecommendList = ({ recommends }: RecommendListProps) => {
  return (
    <div>
      <h3>
        회원님을 위한 추천
      </h3>
      <ul className='flex flex-wrap flex-col gap-8'>
        {recommends.map((user) => {
          return <Profile key={user.id} profile={user} size={'lg'} isSubscribed />
        })}
      </ul>
    </div>
  )
}

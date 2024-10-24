'use client'
import { UserProfile } from '@/entities/user/types'
import { Profile } from '@/features'
import { Box } from '@mantine/core'

interface RecommendListProps {
  recommends: UserProfile[]
}

export const RecommendList = ({ recommends }: RecommendListProps) => {
  return (
    <Box w="320px" mt={20}>
      {recommends.map((user) => {
        return <Profile key={user.id} profile={user} size={'lg'} isSubscribed />
      })}
    </Box>
  )
}

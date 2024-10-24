'use client'
import { UserProfile } from '@/entities/user/types'
import { Profile } from '@/features'
import { Box, Title } from '@mantine/core'

interface RecommendListProps {
  recommends: UserProfile[]
}

export const RecommendList = ({ recommends }: RecommendListProps) => {
  return (
    <Box w="320px" mt={20}>
      <Title size="sm" c="dark">
        회원님을 위한 추천
      </Title>
      {recommends.map((user) => {
        return <Profile key={user.id} profile={user} size={'lg'} isSubscribed />
      })}
    </Box>
  )
}

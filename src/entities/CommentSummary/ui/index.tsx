import { Flex } from '@mantine/core'
import { Profile } from '@/features'

export const CommentSummary = () => {
  return (
    <Flex align="center" gap="sm">
      <Profile
        profile={{
          name: 'shinbom',
        }}
        size="sm"
      />
      <span>좋아요 100개</span>
    </Flex>
  )
}

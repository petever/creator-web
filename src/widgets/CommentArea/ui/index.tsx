import {Box, Flex, Group} from '@mantine/core'
import { Comment, CommentInput } from '@/features'

export const CommentArea = () => {
  return (
    <Box>
			<Comment />
      <CommentInput />
    </Box>
  )
}

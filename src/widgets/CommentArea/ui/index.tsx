import { Box, Flex, Group } from '@mantine/core'
import { Comment, CommentInput } from '@/features'

interface CommentAreaProps {
  id : string
}
export const CommentArea = ({ id }: CommentAreaProps) => {
  return (
    <Box mt={20}>
      <Comment id={id}/>
      <CommentInput id={id}/>
    </Box>
  )
}

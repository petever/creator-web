import {Avatar, Flex} from '@mantine/core'

export const CommentSummary = () => {
  return (
    <Flex
			align='center'
			gap='sm'
		>
      <Avatar />
			<span>좋아요 100개</span>
    </Flex>
  )
}

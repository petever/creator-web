import { useForm } from '@mantine/form'
import { ActionIcon, Box, Button, Flex, Input } from '@mantine/core'
import {IconSend} from "@tabler/icons-react";
import {useAddComment} from "@/features/CommentInput/hooks/useAddComment";

interface CommentInputProps {
  id : string
}

export const CommentInput = ({id} : CommentInputProps) => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      content: ''
    },
  })
  const {addCommentMutate} = useAddComment(id)

  const handleSubmit = (values: typeof form.values) => {
    addCommentMutate(values)
  }

  return (
    <form onSubmit={form.onSubmit((values: any) => handleSubmit(values))}>
      <Flex align="center" gap="sm">
        <Box flex={'1 1 80%'}>
          <Input key={form.key('comment')} {...form.getInputProps('comment')} />
        </Box>
        <ActionIcon type="submit" size="lg">
          <IconSend/>
        </ActionIcon>
      </Flex>
    </form>
  )
}

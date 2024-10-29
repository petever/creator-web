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
      contents: ''
    },
  })
  const {addCommentMutate} = useAddComment(id)

  const handleSubmit = (values: typeof form.values) => {
    const { contents } = values
    if(!contents) return

    addCommentMutate(values)
  }

  return (
    <form onSubmit={form.onSubmit((values: any) => handleSubmit(values))}>
      <Flex align="center" gap="sm">
        <Box flex={'1 1 80%'}>
          <Input key={form.key('contents')} {...form.getInputProps('contents')} />
        </Box>
        <ActionIcon type="submit" size="lg">
          <IconSend/>
        </ActionIcon>
      </Flex>
    </form>
  )
}

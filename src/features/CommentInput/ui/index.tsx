import { useForm } from '@mantine/form'
import { ActionIcon, Box, Button, Flex, Input } from '@mantine/core'

export const CommentInput = () => {
  const form = useForm({
    mode: 'uncontrolled',
  })

  form.watch('comment', ({ previousValue, value, touched, dirty }) => {
    console.log({ previousValue, value, touched, dirty })
  })

  return (
    <Flex align="center" gap="sm">
      <Box flex={'1 1 80%'}>
        <Input key={form.key('comment')} {...form.getInputProps('comment')} />
      </Box>
      <ActionIcon type="submit" size="lg"></ActionIcon>
    </Flex>
  )
}

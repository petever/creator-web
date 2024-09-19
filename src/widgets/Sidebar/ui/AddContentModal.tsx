import { Button, Input, Modal, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'

interface AddConte1ntModalProps {
  opened: boolean
  onClose: () => void
}
export const AddContentModal = ({ opened, onClose }: AddConte1ntModalProps) => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      contents: '',
    },
  })

  return (
    <Modal opened={opened} onClose={onClose}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Input placeholder={'제목'} key={form.key('title')} {...form.getInputProps('title')} />
        <Textarea
          placeholder={'내용'}
          key={form.key('description')}
          {...form.getInputProps('description')}
        />
        <Button type="submit">전송</Button>
      </form>
    </Modal>
  )
}

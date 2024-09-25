import { Button, Input, Modal, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'
import {Dropzone} from "@mantine/dropzone";
import {ImageUpload} from "@/features/ImageUpload";

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
    <Modal opened={opened} onClose={onClose} title="새 게시물 만들기">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <ImageUpload/>
        {/*<Input placeholder={'제목'} key={form.key('title')} {...form.getInputProps('title')} />*/}
        {/*<Textarea*/}
        {/*  placeholder={'내용'}*/}
        {/*  key={form.key('description')}*/}
        {/*  {...form.getInputProps('description')}*/}
        {/*/>*/}
        {/*<Button type="submit">전송</Button>*/}
      </form>
    </Modal>
  )
}

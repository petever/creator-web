import { Modal } from '@mantine/core'
import { useForm } from '@mantine/form'
import ImageUpload from "@/widgets/ImageUpload/ui";

interface AddConte1ntModalProps {
  opened: boolean
  onClose: () => void
}
export const AddContentModal = ({ opened, onClose }: AddConte1ntModalProps) => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
			step : 0,
      title: '',
      contents: '',
			files : []
    },
  })

  return (
    <Modal size='xl' centered opened={opened} onClose={onClose} title="새 게시물 만들기">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <ImageUpload />
      </form>
    </Modal>
  )
}

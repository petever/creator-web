import { Modal } from '@mantine/core'
import ImageUpload from "@/widgets/ImageUpload/ui";
import { ContentFormProvider, useContentForm } from '@/widgets/AddContentModal/lib/form-context'


interface AddConte1ntModalProps {
  opened: boolean
  onClose: () => void
}

const AddContentModal = ({ opened, onClose }: AddConte1ntModalProps) => {
  const form = useContentForm({
    mode: 'controlled',
    initialValues: {
			step : 0,
      title: '',
      contents: '',
			files : []
    },
  })

  return (
    <Modal size='xl' centered opened={opened} onClose={onClose} title="새 게시물 만들기">
      <ContentFormProvider form={form}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <ImageUpload />
        </form>
      </ContentFormProvider>
    </Modal>
  )
}

export default AddContentModal

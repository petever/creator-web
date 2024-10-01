import {Button, Modal} from '@mantine/core'
import { ContentFormProvider, useContentForm } from '@/widgets/AddContentModal/lib/form-context'
import ImageUpload from "@/widgets/AddContentModal/ui/ImageUpload";
import {ContentForm} from "@/widgets/AddContentModal/ui/ContentForm";
import {AddContentFooter} from "@/widgets/AddContentModal/ui/AddContentFooter";


interface AddConte1ntModalProps {
  opened: boolean
  onClose: () => void
}

const AddContentModal = ({ opened, onClose }: AddConte1ntModalProps) => {
  const form = useContentForm({
    mode: 'controlled',
    initialValues: {
      currentImage : '',
      currentIndex : 0,
			step : 0,
      title: '',
      contents: '',
			files : []
    },
  })

  const { onSubmit } = form

  const handleSubmit = (values: typeof form.values) => {
    const { title, contents, files} = values
    const payload = {
      title,
      contents,
      files
    }

    console.log('payload', payload)
  };

  return (
    <Modal size='xl' centered opened={opened} onClose={onClose} title="새 게시물 만들기">
      <ContentFormProvider form={form}>
        <form onSubmit={onSubmit(handleSubmit)}>
          <ImageUpload />
          <ContentForm/>
          <AddContentFooter/>
        </form>
      </ContentFormProvider>
    </Modal>
  )
}

export default AddContentModal

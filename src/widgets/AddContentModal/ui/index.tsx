import { Modal} from '@mantine/core'
import { ContentFormProvider, useContentForm } from '@/widgets/AddContentModal/lib/form-context'
import ImageUpload from "@/widgets/AddContentModal/ui/ImageUpload";
import {ContentForm} from "@/widgets/AddContentModal/ui/ContentForm";
import {AddContentFooter} from "@/widgets/AddContentModal/ui/AddContentFooter";
import {Simulate} from "react-dom/test-utils";


interface AddContentModalProps {
  opened: boolean
  onClose: () => void
}

const AddContentModal = ({ opened, onClose }: AddContentModalProps) => {
  const form = useContentForm({
    mode: 'controlled',
    initialValues: {
      currentImage : '',
      currentIndex : 0,
			step : 0,
      title: '',
      contents: '',
			files : [],
      isPreview : false,
      isSubscribed : 'false'
    },
  })

  const { onSubmit, reset } = form

  const handleSubmit = (values: typeof form.values) => {
    const { title, contents, isSubscribed, files} = values
    const payload = {
      title,
      contents,
      isSubscribed : values.isSubscribed !== 'false',
      // files
    }

    console.log('payload', payload)
  };

  const handleModalClose = () => {
    reset()
    onClose()
  }

  return (
    <Modal size='xl' centered opened={opened} onClose={handleModalClose} title="새 게시물 만들기">
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

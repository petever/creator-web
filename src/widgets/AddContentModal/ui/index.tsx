import { Modal } from '@mantine/core'
import { ContentFormProvider, useContentForm } from '@/widgets/AddContentModal/lib/form-context'
import ContentUpload from '@/widgets/AddContentModal/ui/ContentUpload'
import { ContentForm } from '@/widgets/AddContentModal/ui/ContentForm'
import { AddContentFooter } from '@/widgets/AddContentModal/ui/AddContentFooter'
import { useCreatePosts } from '@/widgets/AddContentModal/hooks/useCreatePosts'
import classes from './styles.module.css'

interface AddContentModalProps {
  opened: boolean
  onClose: () => void
}

const AddContentModal = ({ opened, onClose }: AddContentModalProps) => {
  const { createPostMutation } = useCreatePosts(() => handleModalClose())

  const form = useContentForm({
    mode: 'controlled',
    initialValues: {
      currentFile: '',
      currentFileType: 'image',
      currentIndex: 0,
      step: 0,
      title: '',
      contents: '',
      files: [],
      isPreview: false,
      isSubscribed: 'false',
    },
  })

  const { onSubmit, reset } = form

  const handleSubmit = (values: typeof form.values) => {
    const { title, contents, isSubscribed, files } = values

    const formData = new FormData()
    formData.append(
      'postRequest',
      new Blob(
        [
          JSON.stringify({
            title,
            contents,
            isSubscribed: values.isSubscribed !== 'false',
          }),
        ],
        { type: 'application/json' },
      ),
    )

    formData.append(`files`, new Blob(files))

    createPostMutation(formData)
  }

  const handleModalClose = () => {
    reset()
    onClose()
  }

  return (
    <Modal size="xl" centered opened={opened} onClose={handleModalClose} title="새 게시물 만들기">
      <ContentFormProvider form={form}>
        <form onSubmit={onSubmit(handleSubmit)}>
          <ContentUpload />
          <ContentForm />
          <AddContentFooter />
        </form>
      </ContentFormProvider>
    </Modal>
  )
}

export default AddContentModal

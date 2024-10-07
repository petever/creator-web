import { Modal} from '@mantine/core'
import { ContentFormProvider, useContentForm } from '@/widgets/AddContentModal/lib/form-context'
import ContentUpload from "@/widgets/AddContentModal/ui/ContentUpload";
import {ContentForm} from "@/widgets/AddContentModal/ui/ContentForm";
import {AddContentFooter} from "@/widgets/AddContentModal/ui/AddContentFooter";
import {Simulate} from "react-dom/test-utils";
import {useCreatePosts} from "@/widgets/AddContentModal/hooks/useCreatePosts";


interface AddContentModalProps {
  opened: boolean
  onClose: () => void
}

const AddContentModal = ({ opened, onClose }: AddContentModalProps) => {
  const { createPostMutation } = useCreatePosts()

  const form = useContentForm({
    mode: 'controlled',
    initialValues: {
      currentFile : '',
      currentFileType : 'image',
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
      postRequest : {
        title,
        contents,
        isSubscribed : values.isSubscribed !== 'false',
      },
      files
    }

    const formData = new FormData()
    formData.append(
      'postRequest',
      new Blob(
        [
          JSON.stringify(payload.postRequest),
        ],
        { type: 'application/json' },
      ),
    )

    files.forEach((file, index) => {
      formData.append(`files`, file);
    });

    createPostMutation(formData)
  };

  const handleModalClose = () => {
    reset()
    onClose()
  }

  return (
    <Modal size='xl' centered opened={opened} onClose={handleModalClose} title="새 게시물 만들기">
      <ContentFormProvider form={form}>
        <form onSubmit={onSubmit(handleSubmit)}>
          <ContentUpload />
          <ContentForm/>
          <AddContentFooter/>
        </form>
      </ContentFormProvider>
    </Modal>
  )
}

export default AddContentModal

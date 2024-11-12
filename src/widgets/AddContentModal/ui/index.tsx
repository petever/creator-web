import { ContentFormProvider, useContentForm } from '@/widgets/AddContentModal/lib/form-context'
import ContentUpload from '@/widgets/AddContentModal/ui/ContentUpload'
import { ContentForm } from '@/widgets/AddContentModal/ui/ContentForm'
import { AddContentFooter } from '@/widgets/AddContentModal/ui/AddContentFooter'
import { useCreatePosts } from '@/widgets/AddContentModal/hooks/useCreatePosts'
import {Dialog, DialogContent, DialogTrigger} from "@/shared/ui/dialog";
import {Button} from "@/shared/ui/button";
import {ISidebarItem} from "@/entities/Sidebar/types";
import {useDisclosure} from "@/shared/hooks/useDisclosure";


interface AddContentModalProps{
  item : ISidebarItem
  sidebarClassName : string
}
const AddContentModal = ({ item, sidebarClassName } : AddContentModalProps) => {
  const {
    isOpen,
    onToggle,
    onOpen,
    onClose
  } = useDisclosure()

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

    files.forEach((file) => {
      return formData.append('files', file)
    })

    createPostMutation(formData)
  }

  const handleModalClose = () => {
    reset()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogTrigger asChild>
        <Button variant='ghost' className={sidebarClassName}>
          <item.icon style={{ width: '20px', height: '20px' }} />
          <span className="text-base font-medium">{item.title}</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <ContentFormProvider form={form}>
          <form onSubmit={onSubmit(handleSubmit)}>
            <ContentUpload />
            <ContentForm />
            <AddContentFooter />
          </form>
        </ContentFormProvider>
      </DialogContent>
    </Dialog>
  )
}

export default AddContentModal

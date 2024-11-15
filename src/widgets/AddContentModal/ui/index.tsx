import { ContentFormProvider, useContentForm } from '@/widgets/AddContentModal/lib/form-context'
import ContentUpload from '@/widgets/AddContentModal/ui/ContentUpload'
import { ContentForm } from '@/widgets/AddContentModal/ui/ContentForm'
import { AddContentFooter } from '@/widgets/AddContentModal/ui/AddContentFooter'
import { useCreatePosts } from '@/widgets/AddContentModal/hooks/useCreatePosts'
import {Dialog, DialogContent, DialogTrigger} from "@/shared/ui/dialog";
import {Button} from "@/shared/ui/button";
import {ISidebarItem} from "@/entities/Sidebar/types";
import {useDisclosure} from "@/shared/hooks/useDisclosure";
import {useContentModal} from "@/widgets/AddContentModal/hooks/useContentModal";
import {FormProvider} from "react-hook-form";


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

  const {
    methods,
    handleSubmitContentData,
  } = useContentModal()

  const { handleSubmit, reset } = methods

  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogTrigger asChild>
        <Button variant='ghost' className={sidebarClassName}>
          <item.icon style={{ width: '20px', height: '20px' }} />
          <span className="text-base font-medium">{item.title}</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSubmitContentData)}>
            <ContentUpload />
            <ContentForm />
            <AddContentFooter />
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

export default AddContentModal

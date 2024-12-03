import ContentUpload from '@/widgets/AddContentModal/ui/ContentUpload'
import { ContentForm } from '@/widgets/AddContentModal/ui/ContentForm'
import { AddContentFooter } from '@/widgets/AddContentModal/ui/AddContentFooter'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
import { ISidebarItem } from '@/entities/Sidebar/types'
import { useDisclosure } from '@/shared/hooks/useDisclosure'
import { useContentModal } from '@/widgets/AddContentModal/hooks/useContentModal'
import { FormProvider } from 'react-hook-form'
import {useIsMobile} from "@/shared/hooks/use-mobile";

interface AddContentModalProps {
  item: ISidebarItem
  sidebarClassName: string
}

const AddContentModal = ({ item, sidebarClassName }: AddContentModalProps) => {
  const isMobile = useIsMobile()
  const { isOpen, onToggle, onClose } = useDisclosure()

  const {
    methods,
    handleDropImages,
    handleRemoveImage,
    handleChangeCurrentImage,
    handleSubmitContentData,
  } = useContentModal(onClose)

  const { handleSubmit, reset } = methods

  return (
    <Dialog open={isOpen} onOpenChange={onToggle} >
      <DialogTrigger asChild>
        <Button variant="ghost" className={isMobile ? 'absolute top-[-25px] left-2/1 -ml-7 w-14 h-14 rounded-full bg-gray-300' : sidebarClassName}>
          <item.icon style={{ width: '24px', height: '24px' }} />
          <span className="text-base font-medium hidden md:inline-block">{item.title}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="block p-4  w-screen h-3/5 -translate-x-1/2 -mx-5">
        <DialogHeader className="py-4">
          <DialogTitle>콘텐츠 업로드</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods} >
          <form onSubmit={handleSubmit(handleSubmitContentData)}>
            <div className="overflow-y-auto mb:h-[calc(80vw-210px)] ">
              <ContentUpload
                onShowImageChange={handleChangeCurrentImage}
                onRemoveImage={handleRemoveImage}
                onDropImage={handleDropImages}
              />
            <ContentForm />
            </div>
            <AddContentFooter />
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

export default AddContentModal

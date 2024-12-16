import ContentUpload from '@/widgets/AddContentModal/ui/ContentUpload'
import { ContentForm } from '@/widgets/AddContentModal/ui/ContentForm'
import { AddContentFooter } from '@/widgets/AddContentModal/ui/AddContentFooter'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog'
import { useDisclosure } from '@/shared/hooks/useDisclosure'
import { useContentModal } from '@/widgets/AddContentModal/hooks/useContentModal'
import { FormProvider } from 'react-hook-form'
import { useIsMobile } from '@/shared/hooks/use-mobile'
import { useEffect } from 'react'
import { Button } from '@/shared/ui/button'
import { Plus, SquarePlus } from 'lucide-react'

const AddContentModal = () => {
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

  useEffect(() => {
    methods.reset()
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogTrigger asChild>
        {isMobile ? (
          <SquarePlus size={30} />
        ) : (
          <Button className="w-full mt-3 rounded-2xl">
            <Plus size={24} /> 추가하기
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="block p-4 w-[calc(100vw-1.15rem)] rounded-lg">
        <DialogHeader className="py-4">
          <DialogTitle>콘텐츠 업로드</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSubmitContentData)}>
            <div className="overflow-y-auto max-h-[calc(100vh-200px)] mb:h-[calc(80vh-210px)]">
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

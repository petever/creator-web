'use client'
import { IconAdjustments } from '@tabler/icons-react'
import { Preview } from '@/features/PreviewList/ui/Preview'
import {useFormContext} from "react-hook-form";
import {Button} from "@/shared/ui/button";

interface MoreImageUploadProps {
  onShowImageChange: (url: string, index: number, type : "video" | "image") => void
  onRemoveImage: (index: number) => void
  onOpenDropzone : () => void
}

export const MoreMediaUpload = ({
  onShowImageChange,
  onRemoveImage,
  onOpenDropzone
}: MoreImageUploadProps) => {
  const method = useFormContext()
  const { getValues, setValue} = method
  const { isPreview } = getValues()

  const handlePreviewStatusChange = () => {
    setValue('isPreview', !isPreview)
  }

  return (
    <div className='absolute bottom-2.5 right-2.5 z-10'>
      <Button onClick={handlePreviewStatusChange}>
        <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </Button>
      {isPreview && (
        <div className='flex items-center gap-2.5 absolute -top-32 right-0 min-w-64 p-2.5 rounded-lg bg-current'>
          <Button onClick={onOpenDropzone}>업로드</Button>
          <Preview
            onRemoveImage={onRemoveImage}
            onShowImageChange={onShowImageChange}
          />
        </div>
      )}
    </div>
  )
}

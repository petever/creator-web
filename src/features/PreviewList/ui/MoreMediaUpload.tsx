'use client'
import { IconAdjustments, IconCirclePlus } from '@tabler/icons-react'
import { Preview } from '@/features/PreviewList/ui/Preview'
import classes from '@/features/PreviewList/ui/styles.module.css'
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
    <div className={classes.moreImageUploadWrapper}>
      <Button onClick={handlePreviewStatusChange}>
        <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </Button>
      {isPreview && (
        <div className={classes.moreImageUploadUtils}>
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

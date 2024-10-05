'use client'
import {ActionIcon, UnstyledButton} from '@mantine/core';
import {IconAdjustments, IconCirclePlus} from '@tabler/icons-react';
import {Preview} from "@/features/PreviewList/ui/Preview";
import classes from "@/features/PreviewList/ui/styles.module.css";
import {useContentFormContext} from "@/widgets/AddContentModal/lib/form-context";

interface MoreImageUploadProps {
  currentImage ?: string
  currentIndex : number
  previews : File[]
  onShowImageChange : (url : string, index : number) => void
  onRemoveImage : (index : number) => void
  onImageUpload: (() => void) | null;
}


export const MoreImageUpload = ({currentIndex, previews, onShowImageChange, onRemoveImage, onImageUpload} : MoreImageUploadProps ) => {
  const handleImageUpload = () => {
    onImageUpload?.()
  }

  const form = useContentFormContext()
  const {values, setFieldValue} = form

  const { isPreview } = values

  const handlePreviewStatusChange = () => {
    setFieldValue('isPreview', !isPreview)
  }

  return (
    <div className={classes.moreImageUploadWrapper}>
      <ActionIcon onClick={handlePreviewStatusChange}>
        <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>
      {isPreview &&
        <div className={classes.moreImageUploadUtils}>
          <UnstyledButton className={classes.imageUploadButton} onClick={handleImageUpload}>
            <IconCirclePlus/>
          </UnstyledButton>
          <Preview
            currentIndex={currentIndex}
            previews={previews}
            onRemoveImage={onRemoveImage}
            onShowImageChange={onShowImageChange}
          />
        </div>
      }
    </div>
  )
}

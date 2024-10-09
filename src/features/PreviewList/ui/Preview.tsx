import Image from 'next/image'
import { ActionIcon, UnstyledButton } from '@mantine/core'
import classes from '@/features/PreviewList/ui/styles.module.css'
import { IconAdjustments, IconSquareXFilled } from '@tabler/icons-react'
import { useContentFormContext } from '@/widgets/AddContentModal/lib/form-context'

interface PreviewProps {
  currentIndex: number
  previews: File[]
  onRemoveImage: (index: number) => void
  onShowImageChange: (url: string, index: number) => void
}

export const Preview = ({
  currentIndex,
  previews,
  onRemoveImage,
  onShowImageChange,
}: PreviewProps) => {
  return (
    <ul className={classes.previewListWrapper}>
      {previews.map((file, index) => {
        const isVideo = file.type === 'video/mp4'
        const imageUrl = URL.createObjectURL(file)
        return (
          <li className={classes.previewWrapper} key={`preview_${index}`}>
            <UnstyledButton onClick={() => onShowImageChange(imageUrl, index)}>
              {currentIndex === index && <div className={classes.currentImageWrapper} />}
              {!isVideo ? (
                <Image src={imageUrl} alt="" fill />
              ) : (
                <div className={classes.videoWrapper}>
                  <video src={imageUrl} />
                </div>
              )}
            </UnstyledButton>
            <UnstyledButton className={classes.deleteButton} onClick={() => onRemoveImage(index)}>
              <IconSquareXFilled />
            </UnstyledButton>
          </li>
        )
      })}
    </ul>
  )
}

import Image from 'next/image'
import { ActionIcon, UnstyledButton } from '@mantine/core'
import classes from '@/features/PreviewList/ui/styles.module.css'
import { IconAdjustments, IconSquareXFilled } from '@tabler/icons-react'
import { useContentFormContext } from '@/widgets/AddContentModal/lib/form-context'

interface PreviewProps {
  currentIndex: number
  previews: File[]
  onRemoveImage: (index: number) => void
  onShowImageChange: (url: string, index: number, type : "video" | "image") => void
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
        const fileType = file.type === 'video/mp4' ? 'video' : 'image'
        const url = URL.createObjectURL(file)
        return (
          <li className={classes.previewWrapper} key={`preview_${index}`}>
            <UnstyledButton className={classes.previewWrapperButton} onClick={() => onShowImageChange(url, index, fileType)}>
              {currentIndex === index && <div className={classes.currentImageWrapper} />}
              {!isVideo ? (
                <Image src={url} alt="" fill />
              ) : (
                <div className={classes.videoWrapper}>
                  <video>
                    <source src={url} type="video/mp4" />
                  </video>
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

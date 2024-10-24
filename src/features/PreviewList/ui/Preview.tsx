import Image from 'next/image'
import { UnstyledButton } from '@mantine/core'
import classes from '@/features/PreviewList/ui/styles.module.css'
import { IconSquareXFilled } from '@tabler/icons-react'
import Video from 'next-video';
import {VideoPlayer} from "@/shared";

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
              ) : <VideoPlayer src={url} isControl/>}
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

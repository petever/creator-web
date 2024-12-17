import Image from 'next/image'
import { IconSquareXFilled } from '@tabler/icons-react'
import { VideoPlayer } from '@/shared'
import { useFormContext } from 'react-hook-form'
import { Button } from '@/shared/ui/button'
import {AddContentData} from "@/widgets/AddContentModal/types";

interface PreviewProps {
  onRemoveImage: (index: number) => void
  onShowImageChange: (url: string, index: number, type: 'video' | 'image') => void
}

export const Preview = ({ onRemoveImage, onShowImageChange }: PreviewProps) => {
  const method = useFormContext<AddContentData>()
  const { getValues, setValue } = method
  const { currentIndex, files } = getValues()

  return (
    <ul className="flex gap-1.25 items-center justify-between">
      {files.map((data, index) => {
        const { type, file } = data
        const isVideo = type === 'video/mp4'
        const fileType = type === 'video/mp4' ? 'video' : 'image'
        const url = URL.createObjectURL(file)
        return (
          <li
            className="w-[100px] h-[100px] relative rounded-lg overflow-hidden"
            key={`preview_${index}`}
          >
            <Button
              className="w-full h-full"
              onClick={() => onShowImageChange(url, index, fileType)}
            >
              {currentIndex === index && (
                <div className="w-full h-full absolute top-0 right-0 z-10 bg-black/50" />
              )}
              {!isVideo ? <Image src={url} alt="" fill /> : <VideoPlayer src={url} isControl />}
            </Button>
            <Button
              className="flex items-center justify-center absolute top-[5px] right-[5px] z-10 rounded-md overflow-hidden bg-white"
              onClick={() => onRemoveImage(index)}
            >
              <IconSquareXFilled />
            </Button>
          </li>
        )
      })}
    </ul>
  )
}

import {IconSquareXFilled} from '@tabler/icons-react'
import { useFormContext } from 'react-hook-form'
import { Button } from '@/shared/ui/button'

interface MoreImageUploadProps {
  onRemoveImage: (index: number) => void
}

export const MoreMediaUpload = ({
  onRemoveImage,
}: MoreImageUploadProps) => {
  const method = useFormContext()
  const { getValues } = method
  const { currentIndex } = getValues()

  return (
    <div>
      <Button
        type='button'
        className="absolute top-2.5 right-2.5 z-10"
        onClick={() => onRemoveImage(currentIndex)}
      >
        <IconSquareXFilled />
      </Button>
    </div>
  )
}

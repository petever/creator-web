import { Button } from '@/shared/ui/button'
import { Lock } from 'lucide-react'

interface PostingLSubscribeLockerProps {
  isNotSubscribed: boolean
}

export const PostingLSubscribeLocker = ({ isNotSubscribed }: PostingLSubscribeLockerProps) => {
  if (!isNotSubscribed) return null
  return (
    <div className="flex flex-col justify-center items-center p-2 h-[400px] gap-10 bg-gray-100">
      <div className="flex justify-center gap-5">
        <span className="flex items-center gap-2">
          <Lock />
        </span>
      </div>
      <Button>팬이되어 게시물을 확인해 보세요!</Button>
    </div>
  )
}

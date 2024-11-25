import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/shared/ui/dialog'
import { PostLikeList } from '@/entities'

interface LikeListProps {
  id: string
  likeCount: number
}

export const LkeList = ({ id, likeCount }: LikeListProps) => {
  if (!likeCount) return null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm text-gray-500">
          <span className="font-medium text-gray-900">여러명</span>이 좋아합니다.
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>좋아요</DialogTitle>
        <PostLikeList id={id} />
      </DialogContent>
    </Dialog>
  )
}

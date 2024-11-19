import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
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
        <Button variant={'ghost'}>좋아요 {likeCount}개 모두 보기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>좋아요</DialogTitle>
        <PostLikeList id={id} />
      </DialogContent>
    </Dialog>
  )
}

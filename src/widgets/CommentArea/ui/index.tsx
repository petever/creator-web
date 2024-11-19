import { Comment, CommentInput } from '@/features'

interface CommentAreaProps {
  id: string
}
export const CommentArea = ({ id }: CommentAreaProps) => {
  return (
    <div>
      <h3>댓글</h3>
      <div className="h-[calc(100vh-200px)] overflow-y-auto">
        <Comment id={id} />
      </div>
      <CommentInput id={id} />
    </div>
  )
}

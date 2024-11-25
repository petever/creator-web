import { Comment, CommentInput } from '@/features'

interface CommentAreaProps {
  id: string
}

export const CommentArea = ({ id }: CommentAreaProps) => {
  return (
    <div>
      <div className="h-[calc(100vh-352px)] overflow-y-auto">
        <Comment id={id} />
      </div>
      <CommentInput id={id} />
    </div>
  )
}

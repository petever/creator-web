import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { addComment } from '@/features/CommentInput/api/addComment'
import { CommentSubmit } from '@/features/Comment/type'

export const useAddComment = (id: string) => {
  const queryClient = useQueryClient()
  const { mutate: addCommentMutate } = useMutation({
    mutationKey: [MUTATION_KEY.ADD_COMMENT],
    mutationFn: (comment: CommentSubmit) => addComment(id, comment),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.COMMENTS, id] })
    },
  })

  return { addCommentMutate }
}

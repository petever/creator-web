import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MUTATION_KEY} from "@/shared/constants/mutaionKey";
import {QUERY_KEY} from "@/shared/constants/queryKey";
import {addComment} from "@/features/CommentInput/api/addComment";

export const useAddComment = (id : string) => {
  const queryClient = useQueryClient()
  const { mutate: addCommentMutate } = useMutation({
    mutationKey: [MUTATION_KEY.ADD_COMMENT],
    mutationFn: (comment: string) => addComment(id, comment),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.COMMENTS] })
    },
  })

  return { addCommentMutate }
}

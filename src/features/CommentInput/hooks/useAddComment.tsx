import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MUTATION_KEY} from "@/shared/constants/mutaionKey";
import {AddSubscribePlan} from "@/features/subscribe/types";
import {addSubscriberPlans} from "@/features/subscribe/api/addSubscriberPlans";
import {QUERY_KEY} from "@/shared/constants/queryKey";
import {addComment} from "@/features/CommentInput/api/addComment";
import {AddComment} from "@/features/CommentInput/types";

export const useAddComment = (id : string) => {
  const queryClient = useQueryClient()
  const { mutate: addCommentMutate } = useMutation({
    mutationKey: [MUTATION_KEY.ADD_COMMENT],
    mutationFn: (comment: AddComment) => addComment(id, comment),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.COMMENTS] })
    },
  })

  return { addCommentMutate }
}
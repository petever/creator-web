import {QueryClient, useMutation, useQueryClient} from '@tanstack/react-query'
import {updateLikePosting} from "@/features/FeedButtons/api/updateFavoritePosting";
import {MUTATION_KEY} from "@/shared/constants/mutaionKey";
import {FeedContents} from "@/entities/feeds/types";
import {QUERY_KEY} from "@/shared/constants/queryKey";

export const useUpdateLikePosting = (id: string) => {
  const queryClient = new QueryClient()
  const { mutate: updateLikePostingMutate, data } = useMutation({
    mutationFn: () => updateLikePosting(id),
    mutationKey : [MUTATION_KEY.UPDATE_LIKE_POSTING],
    onMutate: async (feed : FeedContents) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY.FEEDS, id] })
      const previousFeed = queryClient.getQueryData([QUERY_KEY.FEEDS, id])
      queryClient.setQueryData([QUERY_KEY.FEEDS, id], feed)
      return { previousFeed }
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData([QUERY_KEY.FEEDS], context?.previousFeed)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.FEEDS] })
    },
  })

  return {
    data,
    updateLikePostingMutate,
  }
}

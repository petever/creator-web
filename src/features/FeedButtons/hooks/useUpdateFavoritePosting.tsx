import {QueryClient, useMutation, useQueryClient} from '@tanstack/react-query'
import {updateLikePosting} from "@/features/FeedButtons/api/updateFavoritePosting";
import {MUTATION_KEY} from "@/shared/constants/mutaionKey";
import {FeedContents} from "@/entities/feeds/types";

export const useUpdateLikePosting = (id: string) => {
  const queryClient = new QueryClient()
  const { mutate: updateLikePostingMutate, data } = useMutation({
    mutationFn: () => updateLikePosting(id),
    mutationKey : [MUTATION_KEY.UPDATE_LIKE_POSTING],
    onMutate: async (feed : FeedContents) => {
      await queryClient.cancelQueries({ queryKey: ['feeds', feed.id] })
      const previousFeed = queryClient.getQueryData(['feeds', feed.id])

      queryClient.setQueryData(['feeds', feed.id], feed)
      return { previousFeed, feed }
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['feeds'], context)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['feeds'] })
    },
  })

  return {
    data,
    updateLikePostingMutate,
  }
}

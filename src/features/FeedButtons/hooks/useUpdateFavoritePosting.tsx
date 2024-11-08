import { useMutation, useQueryClient} from '@tanstack/react-query'
import {updateLikePosting} from "@/features/FeedButtons/api/updateFavoritePosting";
import {MUTATION_KEY} from "@/shared/constants/mutaionKey";
import {FeedContents, FeedPageData } from "@/entities/feeds/types";
import {QUERY_KEY} from "@/shared/constants/queryKey";
import {getFeedQueryKey} from "@/entities/feeds/lib";
import { notifications } from '@mantine/notifications'


export const useUpdateLikePosting = (id: string, username ?: string) => {
  const queryClient = useQueryClient()
  const { mutate: updateLikePostingMutate, data, isError } = useMutation({
    mutationFn: () => updateLikePosting(id),
    mutationKey : [MUTATION_KEY.UPDATE_LIKE_POSTING],
    onMutate: async (feed : FeedContents) => {
      await queryClient.cancelQueries({ queryKey: getFeedQueryKey(username) })
      const previousFeed = queryClient.getQueryData(getFeedQueryKey(username) ) as FeedPageData

      const contentIndex = previousFeed.pages.findIndex((page) => page.content.find((content) => content.id === feed.id))

      queryClient.setQueryData(getFeedQueryKey(username) , (oldData : FeedPageData) => {
        const newContents = previousFeed.pages[contentIndex].content.map((content) => {
          if (content.id === feed.id) {
            return {
              ...content,
              isLiked: !content.isLiked,
            }
          }
          return content
        })

        const newData = {
          content : newContents,
          last : previousFeed.pages[contentIndex].last,
          number : previousFeed.pages[contentIndex].number
        }

        const newPages = oldData.pages.map((data, index) => {
          if(index === contentIndex) {
            return newData
          }
          return data
        })

        return {
        ...oldData,
          pages : newPages,
        };
      });

      return { previousFeed }
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(getFeedQueryKey(username) , context?.previousFeed)
    },
    onSettled: () => {
      return queryClient.invalidateQueries({ queryKey: getFeedQueryKey(username) });
    },
  })

  return {
    data,
    isError,
    updateLikePostingMutate,
  }
}

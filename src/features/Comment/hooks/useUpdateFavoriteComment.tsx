import { useMutation, useQueryClient} from '@tanstack/react-query'
import {updateLikePosting} from "@/features/FeedButtons/api/updateFavoritePosting";
import {MUTATION_KEY} from "@/shared/constants/mutaionKey";
import {FeedContents, FeedPageData, FeedResponse, Feeds} from "@/entities/feeds/types";
import {QUERY_KEY} from "@/shared/constants/queryKey";
import {updateFavoriteComment} from "@/features/Comment/api/updateFavoriteComment";

export const useUpdateFavoriteComment = (id: string, commentId : string) => {
  const queryClient = useQueryClient()
  const { mutate: updateLikePostingMutate, data } = useMutation({
    mutationFn: () => updateFavoriteComment(id, commentId),
    mutationKey : [MUTATION_KEY.UPDATE_LIKE_COMMENT],
    onMutate: async (feed : FeedContents) => {
      /*
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY.COMMENTS] })
      const previousComments = queryClient.getQueryData([QUERY_KEY.COMMENTS]) as FeedPageData

      const contents = previousFeed.pages.flatMap((page) => page.content
      )

      const contentIndex = previousFeed.pages.findIndex((page) => page.content.find((content) => content.id === feed.id))


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

      queryClient.setQueryData([QUERY_KEY.FEEDS], (oldData : FeedPageData) => {
        return {
        ...oldData,
          pages : [...oldData.pages, newData]
        };
      });

      return { previousFeed }
       */
    },
    onError: (err, newTodo, context) => {
      // queryClient.setQueryData([QUERY_KEY.FEEDS], context?.previousFeed)
    },
    onSettled: () => {
      // queryClient.invalidateQueries({ queryKey: [QUERY_KEY.FEEDS] })
    },
  })

  return {
    data,
    updateLikePostingMutate,
  }
}

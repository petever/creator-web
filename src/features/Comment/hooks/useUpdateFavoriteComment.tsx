import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { FeedContents, FeedPageData, FeedResponse, Feeds } from '@/entities/feeds/types'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { updateFavoriteComment } from '@/features/Comment/api/updateFavoriteComment'
import { CommentTypes, ContentPageData } from '@/features/Comment/type'

export const useUpdateFavoriteComment = (id: string) => {
  const queryClient = useQueryClient()
  const { mutate: updateLikeCommentMutate, isSuccess } = useMutation({
    mutationFn: (comment) => updateFavoriteComment(id, comment.id),
    mutationKey: [MUTATION_KEY.UPDATE_LIKE_COMMENT],
    onMutate: async (comment: CommentTypes) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY.COMMENTS, id] })
      const previousComment = queryClient.getQueryData([QUERY_KEY.COMMENTS, id]) as ContentPageData

      const contentIndex = previousComment.pages.findIndex((page) =>
        page.content.find((content) => content.id === comment.id),
      )

      queryClient.setQueryData([QUERY_KEY.COMMENTS, id], (oldData: FeedPageData) => {
        const newContents = previousComment.pages[contentIndex].content.map((content) => {
          if (content.id === comment.id) {
            return {
              ...content,
              contents: content.contents,
            }
          }
          return content
        })

        const newData = {
          content: newContents,
          last: previousComment.pages[contentIndex].last,
          number: previousComment.pages[contentIndex].number,
        }

        const newPages = oldData.pages.map((data, index) => {
          if (index === contentIndex) {
            return newData
          }
          return data
        })

        return {
          ...oldData,
          pages: newPages,
        }
      })

      return { previousComment }
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData([QUERY_KEY.COMMENTS, id], context?.previousComment)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.COMMENTS, id] })
    },
  })

  return {
    updateLikeCommentMutate,
    isSuccess,
  }
}

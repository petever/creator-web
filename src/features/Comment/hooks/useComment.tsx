import {QUERY_KEY} from "@/shared/constants/queryKey";
import {QueryClient, useInfiniteQuery, useQueryClient} from "@tanstack/react-query";
import {getComment} from "@/features/Comment/api/getComment";
import {PAGE_PARAM} from "@/features/Comment/model";

export const useComment = (id : string) => {
  const queryClient = useQueryClient()
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.COMMENTS, id],
    queryFn: ({ pageParam = PAGE_PARAM }) => getComment(id, pageParam),
    initialData: {
      pages: [],
      pageParams: [PAGE_PARAM],
    },
    initialPageParam: PAGE_PARAM,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      console.log('lastPage', lastPage)
      queryClient.getQueryData([QUERY_KEY.COMMENTS, id])
      const lastIndex = lastPage.content.length - 1
      if(lastPage.content.length < 10) return
      const nextId = lastPage.content[lastIndex]?.id
      console.log('comment Next Id', nextId)
      return {
        size : PAGE_PARAM.size,
        nextId : nextId,
      }
    },
  })
}

import {QUERY_KEY} from "@/shared/constants/queryKey";
import {QueryClient, useInfiniteQuery} from "@tanstack/react-query";
import {getComment} from "@/features/Comment/api/getComment";

export const useComment = (id : string) => {
  const queryClient = new QueryClient()
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.COMMENTS],
    queryFn: () => getComment(id),
    initialData: {
      pages: [],
      pageParams: [{
        page: 0,
        size: 1,
        sort: [
          "string"
        ]
      }],
    },
    initialPageParam: {
      page: 0,
      size: 1,
      sort: [
        "string"
      ]
    },
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      queryClient.getQueryData([QUERY_KEY.FEEDS])
      if(lastPage.last) return
      return {
        size : 10,
        page : lastPageParam.page + 10,
        sort : [
          'string'
        ],
      }
    },
  })
}

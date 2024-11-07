import {QUERY_KEY} from "@/shared/constants/queryKey";
import {QueryClient, useInfiniteQuery, useQueryClient} from "@tanstack/react-query";
import {getComment} from "@/features/Comment/api/getComment";
import {PAGE_PARAM} from "@/features/Comment/model";
import {useSearchParams} from "next/navigation";
import {FeedContents} from "@/entities/feeds/types";
import {CommentTypes} from "@/features/Comment/type";

export const useComment = (id : string) => {
  const queryClient = useQueryClient()
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.COMMENTS, id],
    queryFn: () => getComment(id, PAGE_PARAM),
    initialData: {
      pages: [],
      pageParams: [PAGE_PARAM],
    },
    initialPageParam: PAGE_PARAM,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      if(lastPage.last) return
      queryClient.getQueryData([QUERY_KEY.COMMENTS, id])
      return {
        size : PAGE_PARAM.size,
        page : lastPageParam.page ++
      }
    },
  })
}

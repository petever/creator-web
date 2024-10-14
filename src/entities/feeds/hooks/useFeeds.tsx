import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import { Feeds } from '@/entities/feeds/types'
import {getFeedSearchParams} from "@/entities/feeds/lib";

const useFeeds = (initialData: Feeds, username?: string) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.FEEDS],
    queryFn: getFeeds,
    initialData: {
      pages: [initialData],
      pageParams: [getFeedSearchParams(username)],
    },
    initialPageParam: getFeedSearchParams(username),
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      if(lastPage.last) return
      return {
        size : 10,
        page : lastPageParam.page + 10,
        username: lastPageParam.username,
        sort : [
          'string'
        ],
      }
    },
  })
}

export default useFeeds

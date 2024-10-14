import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import { Feeds } from '@/entities/feeds/types'

const useFeeds = (initialData: Feeds, username?: string) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.FEEDS],
    queryFn: getFeeds,
    initialData: {
      pages: [initialData],
      pageParams: [{
        page: 0,
        size: 10,
        sort: [
          "string"
        ]
      }],
    },
    initialPageParam: {
      page: 0,
      size: 10,
      sort: [
        "string"
      ]
    },
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
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

export default useFeeds

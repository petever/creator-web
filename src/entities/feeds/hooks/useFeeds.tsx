import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import { Feeds } from '@/entities/feeds/types'

const useFeeds = (initialData: Feeds, username?: string) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.FEEDS],
    queryFn: ({ pageParam = 1 }) => getFeeds({ page: 0, size: 2 }),
    initialData: {
      pages: [initialData],
      pageParams: [1],
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      // console.log(lastPage)
      // if (!lastPage?.last) {
      //   return allPages.length + 1
      // }
      return undefined
    },
  })
}

export default useFeeds

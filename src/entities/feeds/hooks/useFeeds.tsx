import {useInfiniteQuery} from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import {FeedResponse, Feeds} from '@/entities/feeds/types'


const useFeeds = ( initialData : FeedResponse, userName ?: string) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.FEEDS],
    queryFn: ({ pageParam }) => getFeeds(userName),
    initialData: {
      pages: [initialData],
      pageParams: [],
    },
    initialPageParam: 1,
    getNextPageParam: ({last } : FeedResponse) => {
      console.log('last', last)
      return 1
    },
  })
}

export default useFeeds

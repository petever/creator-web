import { QueryClient, useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import { FeedResponse, Feeds } from '@/entities/feeds/types'
import { getFeedSearchParams } from '@/entities/feeds/lib'

const useFeeds = (initialData: FeedResponse, username?: string) => {
  const queryClient = useQueryClient()
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.FEEDS, username],
    queryFn: getFeeds,
    initialData: {
      pages: [initialData],
      pageParams: [getFeedSearchParams(username)],
    },
    initialPageParam: getFeedSearchParams(username),
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      queryClient.getQueryData([QUERY_KEY.FEEDS])
      if (lastPage.last) return
      return {
        size: 10,
        page: lastPageParam.page + 10,
        username: lastPageParam.username,
        sort: ['string'],
      }
    },
  })
}

export default useFeeds

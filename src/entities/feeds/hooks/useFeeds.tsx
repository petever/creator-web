import { QueryClient, useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import {FeedContents, FeedResponse, Feeds} from '@/entities/feeds/types'
import {getFeedQueryKey, getFeedSearchParams, getMoreFeeds} from '@/entities/feeds/lib'

const useFeeds = (initialData: FeedResponse, username?: string) => {
  const queryClient = useQueryClient()
  return useInfiniteQuery({
    queryKey: getFeedQueryKey(username),
    enabled : !!username,
    queryFn: getFeeds,
    initialData: {
      pages: [initialData],
      pageParams: [getFeedSearchParams(username)],
    },
    initialPageParam: getFeedSearchParams(username),
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      const allFeeds : FeedContents[] = allPages.flatMap(({ content }) => content)
      queryClient.getQueryData(getFeedQueryKey(username))
      return getMoreFeeds(allFeeds, username)
    },
  })
}

export default useFeeds

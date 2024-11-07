import { QueryClient, useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import {FeedContents, FeedResponse, Feeds} from '@/entities/feeds/types'
import {getFeedQueryKey, getFeedSearchParams, getMoreFeeds} from '@/entities/feeds/lib'

const useFeeds = (initialData: FeedResponse, username?: string) => {
  const queryClient = useQueryClient()
  return useInfiniteQuery({
    queryKey: getFeedQueryKey(username),
    queryFn: getFeeds,
    initialData: {
      pages: [initialData],
      pageParams: [getFeedSearchParams(username)],
    },
    initialPageParam: getFeedSearchParams(username),
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      console.log('nextPage')
      const lastIndex = lastPage.content.length - 1
      if(lastPage.content.length < 10) return
      const nextId = lastPage.content[lastIndex]?.id
      queryClient.getQueryData(getFeedQueryKey(username))
      return getMoreFeeds(nextId, username)
    },
  })
}

export default useFeeds

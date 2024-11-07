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
      if(lastPage.last)  return
      queryClient.getQueryData(getFeedQueryKey(username))

      console.log('lastPageParam', lastPageParam)
      return {
        size: 10,
        page: lastPageParam.page++,
        username: username,
        sort: ['string'],
      }
      // return getMoreFeeds(lastPageParam.page, username)
    },
  })
}

export default useFeeds

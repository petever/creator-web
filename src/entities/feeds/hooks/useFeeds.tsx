import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import { FeedResponse } from '@/entities/feeds/types'
import { getFeedQueryKey, getFeedSearchParams, getMoreFeeds } from '@/entities/feeds/lib'

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
      const lastIndex = lastPage.content.length - 1
      if (lastPage.content.length < 10) return
      const nextId = lastPage.content[lastIndex]?.id
      queryClient.getQueryData(getFeedQueryKey(username))
      return getMoreFeeds(nextId, username)
    },
  })
}

export default useFeeds

import { QueryClient, useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import {getFeedQueryKey, getFeedSearchParams, getMoreFeeds} from '@/entities/feeds/lib'
import {getFavoritePostWithMembers} from "@/entities/posts/api/getFavoritePostWithMember";

const useFeeds = (username: string) => {
  const queryClient = useQueryClient()
  return useInfiniteQuery({
    queryKey: getFeedQueryKey(username),
    queryFn: getFeeds,
    initialData: {
      pages: [],
      pageParams: [getFavoritePostWithMembers(username)],
    },
    initialPageParam: getFeedSearchParams(username),
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      const lastIndex = lastPage.content.length - 1
      if(lastPage.content.length < 10) return
      const nextId = lastPage.content[lastIndex]?.id
      queryClient.getQueryData(getFeedQueryKey(username))
      return {
        size: 10
        sort: ['string'],
        nextId
      },
    },
  })
}

export default useFeeds

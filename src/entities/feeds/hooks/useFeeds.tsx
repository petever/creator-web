import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import { FeedPageable, Feeds} from '@/entities/feeds/types'


const useFeeds = ( initialData : Feeds, userName ?: string) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.FEEDS],
    queryFn : ({ pageParam } : { pageParam : FeedPageable}) : Promise<Feeds> => {
      getFeeds(pageParam, userName)
    },
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

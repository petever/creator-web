import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getSearchTrends } from '@/entities/explore/api/getSearchTrends'

export const useSearchTrends = (initialData: any) => {
  const params = {
    page: 0,
    size: 20,
  }
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.SEARCH_TRENDS],
    queryFn: getSearchTrends,
    initialData: {
      pages: [initialData],
      pageParams: [params],
    },
    initialPageParam: params,
    getNextPageParam: (lastPage) => {
      const lastIndex = lastPage.content.length - 1
      if (lastPage.content.length < 10) return
      return lastPage.content[lastIndex]?.id
    },
  })
}

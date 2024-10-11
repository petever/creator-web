import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import { Feeds } from '@/entities/feeds/types'


export const useFeeds = ( initialData : Feeds, userName ?: string) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.FEEDS],
    queryFn: () => getFeeds(userName),
    initialData,
  })
  return { data }
}

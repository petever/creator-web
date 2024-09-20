import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import { Feeds } from '@/entities/feeds/types'

interface UseFeedsProps {
  initialData: Feeds
}

export const useFeeds = ({ initialData }: UseFeedsProps) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.FEEDS],
    queryFn: getFeeds,
    initialData,
  })
  return { data }
}

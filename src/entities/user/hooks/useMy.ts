import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import { Feeds } from '@/entities/feeds/types'
import { getMy } from '@/entities/user/api/getMy'

interface UseMyProps {}

export const useMy = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.MY],
    queryFn: getMy,
  })
  return { data }
}

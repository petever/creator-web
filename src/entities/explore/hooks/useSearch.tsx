import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getSearch } from '@/entities/explore/api/getSearch'

export const useSearch = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.SEARCH],
    queryFn: () => getSearch({ pageParam: { keyword: '' } }),
  })

  return { data }
}

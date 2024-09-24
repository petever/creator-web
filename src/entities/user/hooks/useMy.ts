import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getProfile } from '@/entities/user/api/getProfile'

export const useMyProfile = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.MY_PROFILE],
    queryFn: () => getProfile(),
  })

  console.log(data, 'data')
  return { data }
}

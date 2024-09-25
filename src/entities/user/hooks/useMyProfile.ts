import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getProfile } from '@/entities/user/api/getProfile'
import { UserInfo } from '@/entities/user/types'

export const useMyProfile = (initialData?: UserInfo) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.MY_PROFILE],
    queryFn: () => getProfile(),
    initialData,
  })

  return { data }
}

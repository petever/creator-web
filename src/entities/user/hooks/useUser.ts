import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { getProfile } from '@/entities/user/api/getProfile'
import { UserProfile } from '@/entities/user/types'
import { getUser } from '@/entities/user/api/getUser'

export const useUser = (username?: string, initialData?: UserProfile) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.USERS_USER],
    queryFn: () => getUser(username),
    initialData,
  })

  return { data }
}

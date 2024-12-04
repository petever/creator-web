import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { UserProfile } from '@/entities/user/types'
import { getUser } from '@/entities/user/api/getUser'

export const useUser = (initialData?: UserProfile) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.USERS_USER, initialData?.id],
    queryFn: () => getUser(initialData?.username),
    initialData,
  })

  return { data }
}

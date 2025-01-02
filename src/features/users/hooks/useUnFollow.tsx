import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { unfollow } from '@/features/users/api/unfollow'

export const useUnFollow = (id: string) => {
  const queryClient = useQueryClient()
  const { mutate: unfollowMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UNFOLLOW, id],
    mutationFn: () => unfollow(id),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USERS_USER, id] })
    },
  })

  return { unfollowMutate }
}

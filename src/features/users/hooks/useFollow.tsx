import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { follow } from '@/features/users/api/follow'

export const useFollow = (id: string) => {
  const queryClient = useQueryClient()
  const { mutate: followMutate } = useMutation({
    mutationKey: [MUTATION_KEY.FOLLOW],
    mutationFn: () => follow(id),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USERS_USER, id] })
    },
  })

  return { followMutate }
}

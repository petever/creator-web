import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { unsubscribe } from '@/features/subscribe/api/unsubscribe'

export const useUnsubscribe = (userId?: string) => {
  const queryClient = useQueryClient()
  const { mutate: unSubscribeMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UNSUBSCRIBE],
    mutationFn: (id: string) => unsubscribe(id),
    onSuccess: () => {
      const keys = [QUERY_KEY.USERS_USER, userId, QUERY_KEY.FEEDS]
      keys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
  })

  return { unSubscribeMutate }
}

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { unsubscribe } from '@/features/subscribe/api/unsubscribe'

export const useUnsubscribe = () => {
  const queryClient = useQueryClient()
  const { mutate: unSubscribeMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UNSUBSCRIBE],
    mutationFn: (id: string) => unsubscribe(id),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SUBSCRIBE_PLANS] })
    },
  })

  return { unSubscribeMutate }
}

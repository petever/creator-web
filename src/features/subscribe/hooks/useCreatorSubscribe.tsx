import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { creatorSubscribe } from '@/features/subscribe/api/creatorSubscribe'

export const useCreatorSubscribe = (userId?: string) => {
  const queryClient = useQueryClient()
  const { mutate: creatorSubscribeMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATOR_SUBSCRIBE, userId],
    mutationFn: (planId: string) => creatorSubscribe(planId),
    onSuccess: () => {
      // return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SUBSCRIBE_PLANS] })
    },
  })

  return { creatorSubscribeMutate }
}

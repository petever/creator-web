import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { deleteSubscriberPlans } from '@/features/subscribe/api/deleteSubscriberPlans'

export const useDeleteSubscribePlan = () => {
  const queryClient = useQueryClient()
  const { mutate: deletePlanMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_SUBSCRIBE_PLAN],
    mutationFn: (id: string) => deleteSubscriberPlans(id),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SUBSCRIBE_PLANS] })
    },
  })

  return { deletePlanMutate }
}

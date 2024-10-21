import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { AddSubscribePlan } from '@/features/subscribe/types'
import { addSubscriberPlans } from '@/features/subscribe/api/addSubscriberPlans'

export const useAddSubscribePlan = () => {
  const queryClient = useQueryClient()
  const { mutate: addPlanMutate } = useMutation({
    mutationKey: [MUTATION_KEY.ADD_SUBSCRIBE_PLAN],
    mutationFn: (plan: AddSubscribePlan) => addSubscriberPlans(plan),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SUBSCRIBE_PLANS] })
    },
  })

  return { addPlanMutate }
}

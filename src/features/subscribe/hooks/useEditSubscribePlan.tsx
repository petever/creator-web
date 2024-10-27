import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { editSubscriberPlans } from '@/features/subscribe/api/editSubscriberPlans'

export const useEditSubscribePlan = () => {
  const queryClient = useQueryClient()
  const { mutate: editPlanMutate } = useMutation({
    mutationKey: [MUTATION_KEY.EDIT_SUBSCRIBE_PLAN],
    mutationFn: (values: any) => editSubscriberPlans(values.id, values),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SUBSCRIBE_PLANS] })
    },
  })

  return { editPlanMutate }
}

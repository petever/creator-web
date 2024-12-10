import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { useToast } from '@/shared/hooks/use-toast'
import { cancelForCreator } from '@/features/creators/api/cancelForCreator'

export const useCancelForCreator = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate: cancelForCreatorMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CANCEL_CREATOR],
    mutationFn: cancelForCreator,
    onSuccess: () => {
      toast({
        title: '크리에이터 신쳥 취소되었습니다.',
      })
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.APPLY_CREATOR] })
    },
  })

  return {
    cancelForCreatorMutate,
  }
}

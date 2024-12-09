import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { useToast } from '@/shared/hooks/use-toast'
import { applyForCreator } from '@/features/creators/api/applyForCreator'

export const useApplyForCreator = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate: applyForCreatorMutate } = useMutation({
    mutationKey: [MUTATION_KEY.APPLY_CREATOR],
    mutationFn: (sns: SNS[]) => applyForCreator(sns),
    onSuccess: () => {
      toast({
        title: '크리에이터 신쳥이 완료되었습니다.',
      })
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.APPLY_CREATOR] })
    },
  })

  return {
    applyForCreatorMutate,
  }
}

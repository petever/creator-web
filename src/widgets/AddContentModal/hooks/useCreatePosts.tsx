import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPosts } from '@/widgets/AddContentModal/api/createPosts'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { QUERY_KEY } from '@/shared/constants/queryKey'

export const useCreatePosts = (onClose: () => void) => {
  const queryClient = useQueryClient()
  const { mutate: createPostMutation, data } = useMutation({
    mutationFn: (payload: FormData) => createPosts(payload),
    mutationKey: [MUTATION_KEY.CREATE_POSTING],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.FEEDS],
      })
      onClose()
      // TODO : 피드가 등록됨 토스트 필요
    },
  })

  return {
    createPostMutation,
  }
}

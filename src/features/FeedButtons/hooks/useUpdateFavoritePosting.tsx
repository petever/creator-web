import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateFavoritePosting } from '@/features/FeedButtons/api/updateFavoritePosting'

export const useUpdateFavoritePosting = (id: string) => {
  const { mutate: updateFavoritePostingMutate, data } = useMutation({
    mutationFn: updateFavoritePosting(id),
    // mutationKey :
    onSuccess: () => {
      console.log('success')
    },
  })

  return {
    data,
    updateFavoritePostingMutate,
  }
}

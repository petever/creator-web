import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { updateProfile } from '@/features/users/api/updateProfile'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { UpdateProfile } from '@/features/users/type/profile'

export const useUpdateMyProfile = () => {
  const queryClient = useQueryClient()
  const { mutate: updateProfileMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_PROFILE],
    mutationFn: (profile: FormData) => updateProfile(profile),
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.MY_PROFILE], data)
    },
  })

  return { updateProfileMutate }
}

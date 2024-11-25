import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { updateProfile } from '@/features/users/api/updateProfile'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { UpdateProfile } from '@/features/users/type/profile'
import { useToast } from '@/shared/hooks/use-toast'

export const useUpdateMyProfile = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate: updateProfileMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_PROFILE],
    mutationFn: (profile: FormData) => updateProfile(profile),
    onSuccess: (data: UpdateProfile) => {
      queryClient.setQueryData([QUERY_KEY.MY_PROFILE], data)
      toast({
        title: '프로필이 수정되었습니다.',
        duration: 1000,
      })
    },
  })

  return { updateProfileMutate }
}

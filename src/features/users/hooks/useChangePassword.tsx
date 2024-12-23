import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { useToast } from '@/shared/hooks/use-toast'
import {useRouter} from "next/navigation";
import {changePassword} from "@/features/users/api/changePassword";
import {ChangePasswordRequest} from "@/features/users/type/auth";

export const useChangePassword = () => {
  const { toast } = useToast()
  const router = useRouter()
  const queryClient = useQueryClient()
  const { mutate: changePasswordMutation } = useMutation({
    mutationKey: [MUTATION_KEY.USERS_CHANGE_PASSWORD],
    mutationFn: (payload : ChangePasswordRequest) => changePassword(payload),
    onSuccess: () => {
      return toast({
        title: '비밀번호가 변경되었습니다.',
      })
    },
  })

  return { changePasswordMutation }
}

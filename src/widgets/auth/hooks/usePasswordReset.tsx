import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import {passwordReset} from "@/widgets/auth/api/passwordReset";
import {useState} from "react";
import {toast} from "@/shared/hooks/use-toast";

export const usePasswordReset = () => {
  const [successMessage, setSuccessMessage] = useState('')
  const queryClient = useQueryClient()
  const { mutate: passwordResetMutation, data } = useMutation({
    mutationFn: (payload: FormData) => passwordReset(payload),
    mutationKey: [MUTATION_KEY.USERS_PASSWORD_RESET],
    onSuccess: () => {
      setSuccessMessage('비밀번호 재설정 링크가 이메일로 전송되었습니다.')
    },
    onError: () => {
      toast({
        title: "비밀번호 재설정 링크 발송에 실패하였습니다.",
        variant: "destructive",
      })
    },
  })

  return {
    passwordResetMutation,
    successMessage,
  }
}

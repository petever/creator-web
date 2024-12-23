import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import {passwordReset} from "@/widgets/auth/api/passwordReset";
import {useState} from "react";
import {toast} from "@/shared/hooks/use-toast";

export const usePasswordReset = () => {
  const [successMessage, setSuccessMessage] = useState('')
  const queryClient = useQueryClient()
  const { mutate: passwordResetMutation, isPending } = useMutation({
    mutationFn: (payload: { email : string }) => passwordReset(JSON.stringify(payload)),
    mutationKey: [MUTATION_KEY.USERS_PASSWORD_RESET],
    onSuccess: () => {
      setSuccessMessage('비밀번호 재설정 링크가 이메일로 전송되었습니다.')
    },
    onError: (error) => {
      const notFound = error.message.includes('404')
      let message = '비밀번호 재설정 링크 발송에 실패하였습니다.'
      if(notFound) {
        message = '이메일을 찾을 수 없습니다.'
      }
      toast({
        title: message,
        variant: "destructive",
      })
    },
  })

  return {
    passwordResetMutation,
    successMessage,
    isPending
  }
}

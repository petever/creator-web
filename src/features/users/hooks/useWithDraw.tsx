'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants/mutaionKey'
import { useToast } from '@/shared/hooks/use-toast'
import {withdraw} from "@/features/users/api/withdraw";
import {useRouter} from "next/navigation";
import {signOut} from "next-auth/react";

export const useWithDraw = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { mutate: withDrawMutation } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_USER],
    mutationFn: () => withdraw(),
    onSuccess: () => {
      signOut()
    },
  })

  return { withDrawMutation }
}

'use client'
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/shared/ui/alert-dialog'
import { useDeleteSubscribePlan } from '@/features/subscribe/hooks/useDeleteSubscribePlan'
import { SubscribePlan } from '@/entities/subscribe/types'
interface DeleteSubscribePlanProps {
  plan: SubscribePlan
  isOpen: boolean
  onClose: () => void
}

const DeleteSubscribePlan = ({ plan, isOpen, onClose }: DeleteSubscribePlanProps) => {
  const { deletePlanMutate } = useDeleteSubscribePlan()

  const handleDelete = () => {
    deletePlanMutate(plan.id)
    onClose()
  }
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>구독 플랜 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>삭제된 플랜은 복구할 수 없습니다.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>취소</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>삭제</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default DeleteSubscribePlan

'use client'
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/shared/ui/alert-dialog'
import { ChevronRight } from 'lucide-react'
import { useDisclosure } from '@/shared/hooks/useDisclosure'
import { signOut } from 'next-auth/react'

const LogoutModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleSignOut = async () => {
    await signOut()
  }
  return (
    <div className="p-3 border-b-[1px] hover:bg-gray-50">
      <div className="flex text-sm items-center justify-between" onClick={onOpen}>
        로그아웃
        <ChevronRight className="text-gray-400" />
      </div>
      <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>로그아웃 하시겠습니까?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={onClose}>취소</AlertDialogCancel>
            <AlertDialogAction onClick={handleSignOut}>확인</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
export default LogoutModal

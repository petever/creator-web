'use client'
import classes from './styles.module.css'
import { Owner } from '@/shared/types'
import Image from 'next/image'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/shared/ui/dialog";
import {Avatar, AvatarImage} from "@/shared/ui/avatar";
import SubscribePlanForm from "@/features/subscribe/ui/SubscribePlanForm";
import React from "react";
import {signIn} from "@/auth";
import {useSession} from "next-auth/react";

interface LoginModalProps {
  children ?: React.ReactNode
  owner?: Owner
}
export const LoginModal = ({ children, owner }: LoginModalProps) => {
  const { data: session, status } = useSession()

  const isNotLogin = status === 'unauthenticated'


  const handleLogin = async () => {
    return await signIn('google')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center justify-center">
          {owner && (
            <div className="flex flex-col items-center justify-center gap-4 mb-10">
              <Avatar>
                <AvatarImage src={owner.picture as string} alt={''}/>
              </Avatar>
              <p>{owner.displayName}님의 글 더 보기</p>
              <p>인플루언서의 사진과 동영상을 보려면 가입하세요.</p>
            </div>
          )}
          {/* TODO : Login 컴포넌트 분리 필요(form) */}
          <form onSubmit={handleLogin}>
            <button
              type="submit"
              className="flex items-center justify-center w-75 h-12 bg-white text-dark py-2 px-4 rounded shadow"
            >
              <Image src="/assets/logo-google.svg" alt="Google" width={20} height={20} className="mr-2"/>
              <span className="text-xl font-bold">구글로 시작하기</span>
            </button>
          </form>
        </div>
      </DialogContent>

    </Dialog>
  )
}

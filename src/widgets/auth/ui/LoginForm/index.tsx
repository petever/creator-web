'use client'

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

const LoginForm = () => {
  const handleSNSLogin = async (provider: string) => {
    await signIn(provider)
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
					<CardTitle className="block md:hidden text-center">
						로그인
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
          <Input type="email" placeholder="이메일" required />
          <Input type="password" placeholder="비밀번호" required />
          <div className="flex justify-end">
            <Link href="/reset-password" className="text-sm text-blue-500 hover:underline">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
          <Button className="w-full">로그인</Button>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-3">
          <p className="text-gray-500 text-sm">또는 SNS로 로그인</p>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="flex items-center space-x-2"
              onClick={() => handleSNSLogin('google')}
            >
              <Image src="/assets/logo-google.svg" alt="google" width={20} height={20} />
              <span>Google</span>
            </Button>
          </div>
          <p className="flex gap-2 mt-4 text-sm">
            아직 회원이 아니신가요?
            <Link href="/sign-up" className="text-blue-500 hover:underline">
              회원가입
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginForm

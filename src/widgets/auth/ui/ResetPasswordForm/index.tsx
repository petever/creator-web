'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Label } from '@/shared/ui/label'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'

export default function ResetPasswordForm() {
  const [email, setEmail] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSuccessMessage('비밀번호 재설정 링크가 이메일로 전송되었습니다.')
    console.log('비밀번호 찾기 요청 이메일:', email)
    // 서버 요청 코드 추가 (API 호출)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-gray-800">
            비밀번호 찾기
          </CardTitle>
        </CardHeader>
        <CardContent>
          {successMessage ? (
            <p className="text-center text-sm text-green-600">{successMessage}</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  이메일
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="가입 시 사용한 이메일을 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full"
                  required
                />
              </div>
              <Button type="submit" className="w-full ">
                비밀번호 재설정 링크 보내기
              </Button>
            </form>
          )}
          <p className="mt-4 text-center text-sm text-gray-600">
            비밀번호를 기억하셨나요?
            <a href="/login" className="font-medium text-blue-600 hover:underline">
              로그인
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

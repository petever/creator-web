'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Label } from '@/shared/ui/label'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { signup } from '@/features/users/api/signup'

const passwordSchema = z
  .string()
  .min(6, '비밀번호는 최소 6자 이상이어야 합니다.')
  .regex(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/,
    '비밀번호에는 최소 하나의 문자, 숫자 및 특수문자가 포함되어야 합니다.',
  )

const signUpSchema = z
  .object({
    username: z
      .string()
      .min(2, '이름은 최소 2자 이상이어야 합니다.')
      .regex(/^[^\d]+$/, '이름은 문자만 포함해야 합니다.'),
    email: z.string().email('유효한 이메일을 입력하세요.'),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })

type SignUpFormValues = z.infer<typeof signUpSchema>

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = async (data: SignUpFormValues) => {
    const result = await signup({
      username: data.username,
      email: data.email,
      password: data.password,
    })

    console.log(result, 'result')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-gray-800">
            회원가입
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                이메일
              </Label>
              <Input
                type="email"
                id="email"
                {...register('email')}
                placeholder="이메일을 입력하세요"
                className="mt-1 w-full"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
                이름
              </Label>
              <Input
                type="text"
                id="name"
                {...register('username')}
                placeholder="이름을 입력하세요"
                className="mt-1 w-full"
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>
            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                비밀번호
              </Label>
              <Input
                type="password"
                id="password"
                {...register('password')}
                placeholder="비밀번호를 입력하세요."
                className="mt-1 w-full"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <div>
              <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                비밀번호 확인
              </Label>
              <Input
                type="password"
                id="confirmPassword"
                {...register('confirmPassword')}
                placeholder="비밀번호를 다시 입력하세요"
                className="mt-1 w-full"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              회원가입
            </Button>
          </form>
        </CardContent>
        <p className="mt-4 text-center text-sm text-gray-600">
          이미 계정이 있으신가요?
          <Link href="/login" className="font-medium text-blue-600 hover:underline">
            로그인
          </Link>
        </p>
      </Card>
    </div>
  )
}

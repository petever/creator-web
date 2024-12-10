'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import {usePasswordReset} from "@/widgets/auth/hooks/usePasswordReset";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Loader2} from "lucide-react";

export default function ResetPasswordForm() {
  const emailSchema = z
    .object({
      email: z.string().email('유효한 이메일을 입력하세요.'),
    })
  const form = useForm({
    defaultValues : {
      email : '',
    },
    resolver : zodResolver(emailSchema)
  })
  const { getValues, formState : { isValid } } = form

  const { passwordResetMutation, successMessage, isPending } = usePasswordReset()

  const handleSubmitEmail = () => {
    const payload = {
      email : getValues('email')
    }
    passwordResetMutation(payload)
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
            <div className="px-2 py-4 bg-gray-100 rounded-sm text-center text-sm ">{successMessage}</div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmitEmail)} className="space-y-4">
                <div>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>이메일</FormLabel>
                        <FormControl>
                          <Input placeholder="가입 시 사용한 이메일을 입력하세요" {...field} />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={!isValid || isPending}>
                  {isPending ? <Loader2 className="animate-spin" /> : '임시 비밀번호 전송'}
                </Button>
              </form>
            </Form>
          )}
          <div className='flex items-center justify-between mt-4'>
            <p className="text-center text-sm text-gray-600">
              비밀번호를 기억하셨나요?
            </p>
            <a href="/" className="text-base text-sm text-blue-600 hover:underline">
              로그인
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

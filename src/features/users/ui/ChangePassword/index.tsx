'use client'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/form";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useChangePassword} from "@/features/users/hooks/useChangePassword";

const passwordSchema = z
  .string()
  .min(6, '비밀번호는 최소 6자 이상이어야 합니다.')
  .regex(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/,
    '비밀번호에는 최소 하나의 문자, 숫자 및 특수문자가 포함되어야 합니다.',
  )

const changePasswordSchema = z
  .object({
    oldPassword : passwordSchema,
    newPassword: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })

export const ChangePassword = () => {
  const { changePasswordMutation } = useChangePassword()

  const form = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues : {
      oldPassword: '',
      newPassword: '',
      confirmPassword : ''
    },
    mode : 'onChange',
  })

  const {
    control,
    watch,
    getValues,
    formState: { errors, isDirty, isValid },
  } = form

  const handleChangePassword = () => {
    const payload = {
      oldPassword : getValues('oldPassword'),
      newPassword : getValues('newPassword'),
    }
    changePasswordMutation(payload)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleChangePassword)} className="flex flex-col gap-2 p-4">
        <FormField
          control={control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>현재 비밀번호</FormLabel>
              <FormControl>
                <>
                <Input
                  type='password'
                  {...field}
                />
                </>
              </FormControl>
              <FormMessage >
                {form.formState.errors.oldPassword?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>새 비밀번호</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  {...field}
                />
              </FormControl>
              <FormMessage >
                {form.formState.errors.newPassword?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>새 비밀번호 확인</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  {...field}
                />
              </FormControl>
              <FormMessage >
                {form.formState.errors.confirmPassword?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-4" disabled={!isValid}>비밀번호 변경</Button>
      </form>
    </Form>
  )
}
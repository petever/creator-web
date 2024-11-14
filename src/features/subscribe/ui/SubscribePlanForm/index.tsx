'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { DialogFooter } from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { formatPrice } from '@/shared/util/price'
import { Editor } from '@/shared/ui/Editor'
import { SubscribePlan } from '@/entities/subscribe/types'

interface SubscribePlanFormProps {
  onSubmit: (values: any) => void
  submitText?: string
  plan?: SubscribePlan
}

const SubscribePlanForm = ({ onSubmit, submitText, plan }: SubscribePlanFormProps) => {
  const schema = z.object({
    name: z.string().min(1, {
      message: '플랜 이름을 입력해주세요.',
    }),
    price: z.string().min(2, {
      message: '가격 이름을 입력해주세요.',
    }),
    description: z.string().optional(),
  })

  const form = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      description: '',
      price: '₩0',
    },
  })

  useEffect(() => {
    if (!plan) return
    form.reset({
      name: plan.name,
      description: plan.description,
      price: formatPrice(plan.price),
    })
  }, [plan])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>플랜 이름</FormLabel>
              <FormControl>
                <Input placeholder="플랜 이름을 입력하세요." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>가격</FormLabel>
              <FormControl>
                <Input
                  placeholder="가격을 입력하세요."
                  {...field}
                  onChange={(event) => {
                    field.onChange(formatPrice(event.target.value))
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>설명</FormLabel>
              <FormControl>
                <Editor
                  value={field.value}
                  onChange={field.onChange}
                  height="200px"
                  placeholder="설명을 입력해주세요."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {submitText}
        </Button>
      </form>
    </Form>
  )
}

export default SubscribePlanForm

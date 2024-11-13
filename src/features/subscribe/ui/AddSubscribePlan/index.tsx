'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAddSubscribePlan } from '@/features/subscribe/hooks/useAddSubscribePlan'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
import { Plus } from 'lucide-react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { formatPrice, formattedPriceToNumber } from '@/shared/util/price'
import { useDisclosure } from '@/shared/hooks/useDisclosure'
import { Editor } from '@/shared/ui/Editor'

const AddSubscribePlan = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
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
  const { addPlanMutate } = useAddSubscribePlan()

  const handleSubscribePlanAdd = (values: any) => {
    addPlanMutate({
      ...values,
      price: formattedPriceToNumber(values.price),
      duration: 1,
      unit: 'MONTHS',
    })
    form.reset()
    onClose()
  }

  useEffect(() => {
    if (!isOpen) return
    form.reset()
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogTrigger asChild>
        <Button className="w-full mt-5">
          <Plus /> 플랜 추가
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>구독 플랜 추가</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubscribePlanAdd)} className="space-y-4">
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
                  <FormLabel>내용</FormLabel>
                  <FormControl>
                    <Editor value={field.value} onChange={field.onChange} height="200px" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Confirm</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddSubscribePlan

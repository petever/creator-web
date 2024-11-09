'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDisclosure } from '@mantine/hooks'
import SubscribePlanModal from '@/features/subscribe/ui/SubscribePlanModal'
import { useAddSubscribePlan } from '@/features/subscribe/hooks/useAddSubscribePlan'
import { AddSubscribePlan } from '@/features/subscribe/types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
import { Plus } from 'lucide-react'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
const AddSubscribePlan = () => {
  const form = useForm()
  const [opened, { open, close }] = useDisclosure(false)
  const { addPlanMutate } = useAddSubscribePlan()

  const handleSubscribePlanAdd = (values: AddSubscribePlan) => {
    addPlanMutate(values)
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full mt-5">
            <Plus /> 플랜 추가
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(() => {})} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <SubscribePlanModal opened={opened} close={close} onClick={handleSubscribePlanAdd} />
    </>
  )
}

export default AddSubscribePlan

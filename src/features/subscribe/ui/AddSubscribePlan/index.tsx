'use client'
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
import { Plus } from 'lucide-react'
import { useDisclosure } from '@/shared/hooks/useDisclosure'
import SubscribePlanForm from '@/features/subscribe/ui/SubscribePlanForm'
import { useAddSubscribePlan } from '@/features/subscribe/hooks/useAddSubscribePlan'
import { covertPayloadPlan } from '@/features/subscribe/util'
import { useToast } from '@/shared/hooks/use-toast'

interface AddSubscribePlanProps {
  isNotAdded?: boolean
}

const AddSubscribePlan = ({ isNotAdded }: AddSubscribePlanProps) => {
  const { toast } = useToast()
  const { isOpen, onToggle, onClose } = useDisclosure()

  const { addPlanMutate } = useAddSubscribePlan()

  const handleSubscribePlanAdd = (values: any) => {
    if (isNotAdded) {
      return toast({
        title: '구독 플랜은 5개까지 생성 가능합니다.',
        variant: 'destructive',
      })
    }
    addPlanMutate(covertPayloadPlan(values))
    onClose()
  }

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
        <SubscribePlanForm onSubmit={handleSubscribePlanAdd} submitText="추가" />
      </DialogContent>
    </Dialog>
  )
}

export default AddSubscribePlan

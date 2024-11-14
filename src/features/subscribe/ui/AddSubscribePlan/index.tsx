'use client'
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
import { Plus } from 'lucide-react'
import { useDisclosure } from '@/shared/hooks/useDisclosure'
import SubscribePlanForm from '@/features/subscribe/ui/SubscribePlanForm'
import { useAddSubscribePlan } from '@/features/subscribe/hooks/useAddSubscribePlan'
import { covertPayloadPlan } from '@/features/subscribe/util'

const AddSubscribePlan = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  const { addPlanMutate } = useAddSubscribePlan()

  const handleSubscribePlanAdd = (values: any) => {
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

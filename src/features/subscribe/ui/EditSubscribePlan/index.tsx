'use client'
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/shared/ui/dialog'
import SubscribePlanForm from '@/features/subscribe/ui/SubscribePlanForm'
import { useEditSubscribePlan } from '@/features/subscribe/hooks/useEditSubscribePlan'
import { SubscribePlan } from '@/entities/subscribe/types'
import { covertPayloadPlan } from '@/features/subscribe/util'

interface EditSubscribePlanProps {
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
  plan: SubscribePlan
}

const EditSubscribePlan = ({ isOpen, onToggle, onClose, plan }: EditSubscribePlanProps) => {
  const { editPlanMutate } = useEditSubscribePlan()

  const handleSubscribePlanAdd = (values: any) => {
    editPlanMutate({
      id: plan.id,
      ...covertPayloadPlan(values),
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>구독 플랜 수정</DialogTitle>
        </DialogHeader>
        <SubscribePlanForm onSubmit={handleSubscribePlanAdd} submitText="수정" plan={plan} />
      </DialogContent>
    </Dialog>
  )
}

export default EditSubscribePlan

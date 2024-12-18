'use client'

import { UserProfile } from '@/entities/user/types'
import React from 'react'
import SubscribeCardList from '../../../../features/subscribe/ui/SubscribeCardList'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog'
import { useDisclosure } from '@/shared/hooks/useDisclosure'
import { Button } from '@/shared/ui/button'
import { useSubscribePlans } from '@/entities/subscribe/hooks/useSubscribePlans'

interface SubscribeModalProps {
  userProfile?: UserProfile
}

export const SubscribeModal = ({ userProfile }: SubscribeModalProps) => {
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure()
  const { data: plans } = useSubscribePlans(userProfile?.id)

  const isSubscribed = userProfile?.subscribed?.isSubscribed
  const subscribedPlanId = userProfile?.subscribed?.planId

  const handleOpenModal = () => {
    onOpen()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full rounded-full" onClick={handleOpenModal}>
          {isSubscribed ? '구독중' : '구독하기'}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>구독 플랜</DialogTitle>
        </DialogHeader>
        <div className="max-h-[500px] md:max-h-[900px] overflow-y-auto">
          <SubscribeCardList
            userId={userProfile?.id}
            subscribedPlanId={subscribedPlanId}
            subscribePlans={plans}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

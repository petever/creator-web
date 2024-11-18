'use client'

import React from 'react'
import { SubscribeModal } from '@/widgets/SubscribeModal/ui'
import { useDisclosure } from '@mantine/hooks'
import { UserProfile } from '@/entities/user/types'
import { PAGE } from '@/shared/constants/page'
import Link from 'next/link'
import { Button } from '@/shared/ui/button'

interface SubscribeButtonProps {
  userProfile?: UserProfile
  isSelf?: boolean
}

const SubscribeButton = ({ isSelf, userProfile }: SubscribeButtonProps) => {
  const [isModalOpened, { open: modalOpen, close: modalClose }] = useDisclosure(false)
  const handleOpenModal = () => {
    modalOpen()
  }

  const isSubscribed = userProfile?.isSubscribed

  if (isSelf) {
    return (
      <div className="p-5">
        <Button className="rounded-3xl">프로필 편집</Button>
        <Link href={PAGE.SETTINGS_PROFILE}></Link>
      </div>
    )
  }
  return (
    <div className="p-5">
      <Button className="rounded-3xl" onClick={handleOpenModal}>
        {isSubscribed ? '구독중' : '구독하기'}
      </Button>
      <SubscribeModal opened={isModalOpened} onClose={modalClose} userProfile={userProfile} />
    </div>
  )
}

export default SubscribeButton

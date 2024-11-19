'use client'

import React from 'react'
import { SubscribeModal } from '@/widgets/SubscribeModal/ui'
import { UserProfile } from '@/entities/user/types'
import { PAGE } from '@/shared/constants/page'
import Link from 'next/link'
import { Button } from '@/shared/ui/button'

interface SubscribeButtonProps {
  userProfile?: UserProfile
  isSelf?: boolean
}

const SubscribeButton = ({ isSelf, userProfile }: SubscribeButtonProps) => {

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
      <SubscribeModal userProfile={userProfile} />
    </div>
  )
}

export default SubscribeButton

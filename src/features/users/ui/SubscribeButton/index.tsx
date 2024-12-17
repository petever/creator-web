'use client'

import React from 'react'
import { UserProfile } from '@/entities/user/types'
import { PAGE } from '@/shared/constants/page'
import Link from 'next/link'
import { Button } from '@/shared/ui/button'
import {SubscribeModal} from "@/widgets/subscribe/ui/SubscribeModal";
import {useRouter} from "next/navigation";

interface SubscribeButtonProps {
  userProfile?: UserProfile
  isSelf?: boolean
}

const SubscribeButton = ({ isSelf, userProfile }: SubscribeButtonProps) => {
  const router = useRouter()

  const handleMoveToSettingProfile = () => {
    router.push(PAGE.SETTINGS_PROFILE)
  }

  if (isSelf) {
    return (
      <div className="p-5">
        <Button className="rounded-3xl" onClick={handleMoveToSettingProfile}>프로필 편집</Button>
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

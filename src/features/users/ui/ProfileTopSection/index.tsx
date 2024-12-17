'use client'

import { UserProfile } from '@/entities/user/types'
import { useUser } from '@/entities/user/hooks/useUser'
import Image from 'next/image'
import React from 'react'
import { SubscribeModal } from '@/widgets'
import Link from 'next/link'
import { PAGE } from '@/shared/constants/page'
import { Button } from '@/shared/ui/button'

interface ProfileTopSectionProps {
  userProfile?: UserProfile
  isSelf: boolean
}

export const ProfileTopSection = ({ userProfile, isSelf }: ProfileTopSectionProps) => {
  const { data } = useUser(userProfile)

  if (!data) return null

  return (
    <div className="relative">
      <div className="relative h-60">
        {data.cover && (
          <Image src={data.cover as string} alt="배경 이미지" fill objectFit="cover" />
        )}
      </div>
      <div>
        <div className="flex items-center justify-between px-4">
          <Image
            src={data.picture as string}
            alt={data.username}
            className="relative z-20 rounded-full w-20 h-20 -mt-10"
            width={60}
            height={60}
            style={{ objectFit: 'cover' }}
          />
          <div className="flex items-center justify-end pt-2">
            {isSelf && (
              <Link href={PAGE.SETTINGS_PROFILE}>
                <Button className="rounded-full" variant="outline">
                  프로필 편집
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className="px-4 py-2">
          <p className="text-xl font-medium">{data.displayName}</p>
          <p className="text-sm text-gray-400">@{data.username}</p>
        </div>
        <div className="p-4 mb-4 border-b border-gray-200">
          {!isSelf && <SubscribeModal userProfile={userProfile} />}
        </div>
      </div>
    </div>
  )
}

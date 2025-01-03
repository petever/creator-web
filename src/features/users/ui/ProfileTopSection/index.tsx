'use client'

import { UserProfile } from '@/entities/user/types'
import { useUser } from '@/entities/user/hooks/useUser'
import React from 'react'
import { SubscribeModal } from '@/widgets'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import { Send, User } from 'lucide-react'
import Link from 'next/link'
import { PAGE } from '@/shared/constants/page'
import parse from 'html-react-parser'
import { useFollow } from '@/features/users/hooks/useFollow'

interface ProfileTopSectionProps {
  userProfile: UserProfile
  isSelf: boolean
}

export const ProfileTopSection = ({ userProfile, isSelf }: ProfileTopSectionProps) => {
  const { data } = useUser(userProfile)
  const { followMutate } = useFollow(userProfile?.id)

  if (!data) return null

  const handleFollow = () => followMutate()

  return (
    <div className="relative">
      <div className="relative h-60">
        <Image
          src={data.cover ? (data.cover as string) : '/assets/banner.png'}
          alt="배경 이미지"
          fill
          objectFit="cover"
        />
      </div>
      <div>
        <div className="flex items-center justify-between px-4">
          {!data.picture ? (
            <div className="relative flex justify-center items-center z-20 rounded-full w-20 h-20 -mt-10 bg-gray-300">
              <User size={40} />
            </div>
          ) : (
            <Image
              src={data.picture as string}
              alt={data.username}
              className="relative z-20 rounded-full w-20 h-20 -mt-10"
              width={60}
              height={60}
              style={{ objectFit: 'cover' }}
            />
          )}

          <div className="flex gap-2 items-center justify-end pt-2">
            {isSelf && (
              <Link href={PAGE.SETTINGS_PROFILE}>
                <Button className="rounded-full" variant="outline" size="sm">
                  프로필 편집
                </Button>
              </Link>
            )}
            {!isSelf && (
              <>
                <Button className="rounded-full" variant="outline" size="sm">
                  <Send size={20} /> 메세지
                </Button>
                <Button
                  type="button"
                  className="rounded-full"
                  variant="outline"
                  size="sm"
                  onClick={handleFollow}
                >
                  팔로우
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="px-4 py-2">
          <p className="text-xl font-medium">{data.displayName}</p>
          <p className="text-sm text-gray-400">@{data.username}</p>
        </div>
        {data?.description && parse(data.description)}
        <div className="p-4 mb-4 border-b border-gray-200">
          {!isSelf && <SubscribeModal userProfile={data} />}
        </div>
      </div>
    </div>
  )
}

'use client'

import BackgroundImage from '@/entities/user/ui/BackgroundImage'
import UserInfo from '@/entities/user/ui/UserInfo'
import { UserProfile } from '@/entities/user/types'
import { UserStatus } from '@/entities/user/ui/UserStatus'
import { useUser } from '@/entities/user/hooks/useUser'
import { Avatar, AvatarImage } from '@/shared/ui/avatar'

interface ProfileTopSectionProps {
  userProfile?: UserProfile
  render: React.ReactNode
}

export const ProfileTopSection = ({ userProfile, render }: ProfileTopSectionProps) => {
  const { data } = useUser(userProfile)

  if (!data) return null

  return (
    <div className="relative">
      <div className="p-5 box-border">
        <BackgroundImage cover={data.cover as string} />
        <div className="flex justify-between pt-14">
          <div className="flex">
            <Avatar>
              <AvatarImage src={data.picture as string} />
            </Avatar>
            <UserInfo
              displayName={data.displayName}
              username={data.username}
              status={data.status}
            />
          </div>
          {render}
        </div>
        <UserStatus status={data.status} />
      </div>
    </div>
  )
}

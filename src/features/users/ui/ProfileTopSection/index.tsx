'use client'

import BackgroundImage from '@/entities/user/ui/BackgroundImage'
import UserInfo from '@/entities/user/ui/UserInfo'
import { UserProfile } from '@/entities/user/types'
import { UserStatus } from '@/entities/user/ui/UserStatus'
import { useUser } from '@/entities/user/hooks/useUser'
import { Avatar, AvatarImage } from '@/shared/ui/avatar'

interface ProfileTopSectionProps {
  username?: string
  userProfile?: UserProfile
  render: React.ReactNode
}

export const ProfileTopSection = ({ username, userProfile, render }: ProfileTopSectionProps) => {
  const { data } = useUser(username, userProfile)

  if (!data) return null

  return (
    <div>
      <BackgroundImage cover={data.cover} />
      <div className="p-5">
        <div className="flex justify-between">
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

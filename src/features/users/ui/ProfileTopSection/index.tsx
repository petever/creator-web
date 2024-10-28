'use client'

import { Avatar, Divider, Group } from '@mantine/core'
import BackgroundImage from '@/entities/user/ui/BackgroundImage'
import UserInfo from '@/entities/user/ui/UserInfo'
import { UserProfile } from '@/entities/user/types'
import classes from './styles.module.css'
import { UserStatus } from '@/entities/user/ui/UserStatus'
import { useUser } from '@/entities/user/hooks/useUser'

interface ProfileTopSectionProps {
  username?: string
  userProfile?: UserProfile
  render: React.ReactNode
}

export const ProfileTopSection = ({ username, userProfile, render }: ProfileTopSectionProps) => {
  const { data } = useUser(username, userProfile)

  if (!data) return null

  return (
    <div className={classes.topAreaWrapper}>
      <BackgroundImage cover={data.cover} />
      <div className={classes.information}>
        <Group justify="space-between">
          <Group>
            <Avatar src={data.picture as string} w={80} h={80} />
            <UserInfo
              displayName={data.displayName}
              username={data.username}
              status={data.status}
            />
          </Group>
          {render}
        </Group>
        <UserStatus status={data.status} />
      </div>
      <Divider size={2} color={'themeColors'} />
    </div>
  )
}

'use client'

import { Avatar, Divider, Group } from '@mantine/core'
import {useMyProfile} from "@/entities/user/hooks/useMyProfile";
import BackgroundImage from "@/entities/user/ui/BackgroundImage";
import UserInfo from "@/entities/user/ui/UserInfo";
import {UserProfile} from "@/entities/user/types";
import classes from './styles.module.css'
import {UserStatus} from "@/entities/user/ui/UserStatus";

interface ProfileTopSectionProps {
  userProfile?: UserProfile
  children : React.ReactNode
}
export const ProfileTopSection = ({ userProfile, children } : ProfileTopSectionProps) => {
  const { data } = useMyProfile(userProfile)

  if(!data) return null

  return (
    <div className={classes.topAreaWrapper}>
      <BackgroundImage cover={data.cover}/>
      <div className={classes.information}>
          <Group justify="space-between">
            <Group>
              <Avatar src={data.picture as string} w={80} h={80}/>
              <UserInfo displayName={data.displayName} username={data.username} status={data.status}/>
            </Group>
            {children}
          </Group>
        <UserStatus status={data.status}/>
      </div>
      <Divider size={10} color={'themeColors'} />
    </div>
  )
}

'use client'

import { Avatar, Divider, Group } from '@mantine/core'
import {useMyProfile} from "@/entities/user/hooks/useMyProfile";
import BackgroundImage from "@/entities/user/ui/BackgroundImage";
import UserInfo from "@/entities/user/ui/UserInfo";
import {UserProfile} from "@/entities/user/types";
import classes from './styles.module.css'

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
      <Group justify="space-between">
        <Avatar src={data.picture as string} w={80} h={80} ml={16}/>
        {children}
      </Group>
      <UserInfo displayName={data.displayName} username={data.username} status={data.status}/>
      <Divider size={10} color={'themeColors'} />
    </div>
  )
}

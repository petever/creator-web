'use client'

import React from 'react'
import { Avatar, Box, Button, Divider, Group } from '@mantine/core'
import UserInfo from '@/entities/user/ui/UserInfo'
import BackgroundImage from '@/entities/user/ui/BackgroundImage'
import Link from 'next/link'
import { PAGE } from '@/shared/constants/page'
import { useMyProfile } from '@/entities/user/hooks/useMyProfile'
import { UserProfile } from '@/entities/user/types'
import {ProfileTopSection} from "@/features/users/ui/ProfileTopSection";

interface MyProfileProps {
  userProfile: UserProfile
}

const MyProfile = async ({ userProfile }: MyProfileProps) => {
  return (
    <Box>
      <ProfileTopSection userProfile={userProfile} children={
        <Link href={PAGE.SETTINGS_PROFILE}>프로필 편집</Link>
      }/>
    </Box>
  )
}

export default MyProfile

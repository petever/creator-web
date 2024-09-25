'use client'

import React from 'react'
import { Avatar, Box, Button, Divider, Group } from '@mantine/core'
import UserInfo from '@/entities/user/ui/UserInfo'
import BackgroundImage from '@/entities/user/ui/BackgroundImage'
import Link from 'next/link'
import { PAGE } from '@/shared/constants/page'
import { useMyProfile } from '@/entities/user/hooks/useMyProfile'
import Image from 'next/image'
import { UserProfile } from '@/entities/user/types'

interface MyProfileProps {
  userProfile: UserProfile
}

const MyProfile = async ({ userProfile }: MyProfileProps) => {
  const { data } = useMyProfile(userProfile)

  if(!data) return null
  return (
    <Box>
      <BackgroundImage />
      <Group justify="space-between">
        <Avatar bg="themeColors" w={80} h={80} mt={-30} ml={16}>
          <Image src={data.picture} alt={data.username} width={80} height={80} />
        </Avatar>
        <Link href={PAGE.SETTINGS_PROFILE}>
          <Button mt={10} mr={10} radius={40} size="md">
            프로필 편집
          </Button>
        </Link>
      </Group>
      <UserInfo username={data.username} displayName={data.displayName} />
      <Divider size={10} color={'themeColors'} />
    </Box>
  )
}

export default MyProfile

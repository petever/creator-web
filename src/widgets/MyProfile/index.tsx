'use client'

import React, { useEffect } from 'react'
import { Avatar, Box, Button, Divider, Group } from '@mantine/core'
import UserInfo from '@/entities/user/ui/UserInfo'
import BackgroundImage from '@/entities/user/ui/BackgroundImage'
import Link from 'next/link'
import { PAGE } from '@/shared/constants/page'
import Image from 'next/image'
import { useMyProfile } from '@/entities/user/hooks/useMy'
import { getProfile } from '@/entities/user/api/getProfile'

interface MyProfileProps {
  picture: string
  username: string
  displayName: string
}

const MyProfile = async ({ picture, username, displayName }: MyProfileProps) => {
  const { data } = useMyProfile()
  console.log(data, 'data')
  // const session = await getSession()
  // console.log(session)
  return (
    <Box>
      <BackgroundImage />
      <Group justify="space-between">
        <Avatar bg="themeColors" w={80} h={80} mt={-30} ml={16}>
          {/*<Image src={picture} alt={username} width={80} height={80} />*/}
        </Avatar>
        <Link href={PAGE.SETTINGS_PROFILE}>
          <Button mt={10} mr={10} radius={40} size="md">
            프로필 편집
          </Button>
        </Link>
      </Group>
      <UserInfo username={username} displayName={displayName} />
      <Divider size={10} color={'themeColors'} />
    </Box>
  )
}

export default MyProfile

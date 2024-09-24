import React from 'react'
import { Avatar, Box, Button, Divider, Flex, Group } from '@mantine/core'
import UserInfo from '@/entities/user/ui/UserInfo'
import BackgroundImage from '@/entities/user/ui/BackgroundImage'
import Link from 'next/link'
import { PAGE } from '@/shared/constants/page'
import { useMantineTheme } from '@mantine/core';

const MyProfile = () => {
  const theme = useMantineTheme()
  console.log(theme)
  return (
    <Box>
      <BackgroundImage />
      <Group justify="space-between">
        <Avatar bg="themeColors" w={80} h={80} mt={-30} ml={16} />
        <Link href={PAGE.SETTINGS_PROFILE}>
          <Button mt={10} mr={10} radius={40} size="md">
            프로필 편집
          </Button>
        </Link>
      </Group>
      <UserInfo />
      <Divider size={10} color={'themeColors'}/>
    </Box>
  )
}

export default MyProfile

import React from 'react'
import SubscribeButton from '@/features/users/ui/SubscribeButton'
import { Avatar, Box, Button, Divider, Flex, Group } from '@mantine/core'
import UserInfo from '@/entities/user/ui/UserInfo'
import BackgroundImage from '@/entities/user/ui/BackgroundImage'
import Link from 'next/link'
import { PAGE } from '@/shared/constants/page'

const MyProfile = () => {
  return (
    <Box>
      <BackgroundImage />
      <Group justify="space-between">
        <Avatar bg="blue" w={80} h={80} mt={-30} ml={16} />
        <Link href={PAGE.SETTINGS_PROFILE}>
          <Button mt={10} mr={10} radius={40} size="md">
            프로필 편집
          </Button>
        </Link>
      </Group>
      <UserInfo />
      <Divider size={10} />
    </Box>
  )
}

export default MyProfile

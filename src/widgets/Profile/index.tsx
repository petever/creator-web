import React from 'react'
import SubscribeButton from '@/features/users/ui/SubscribeButton'
import {Avatar, Button, Divider, useMantineTheme} from '@mantine/core'
import UserInfo from '@/entities/user/ui/UserInfo'
import BackgroundImage from '@/entities/user/ui/BackgroundImage'

const Profile = () => {
  return (
    <div>
      <BackgroundImage />
      <Avatar bg="themeColors" w={80} h={80} mt={-30} ml={16} />
      <UserInfo />
      <SubscribeButton />
      <Divider size={10} color={'themeColors'}/>
    </div>
  )
}

export default Profile

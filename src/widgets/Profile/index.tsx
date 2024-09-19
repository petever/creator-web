import React from 'react'
import BackgroundImage from '@/entities/users/ui/BackgroundImage'
import UserInfo from '@/entities/users/ui/UserInfo'
import SubscribeButton from '@/features/users/ui/SubscribeButton'
import { Divider } from '@mantine/core'
const Profile = () => {
  return (
    <div>
      <BackgroundImage />
      <UserInfo />
      <SubscribeButton />
      <Divider size={10} />
    </div>
  )
}

export default Profile

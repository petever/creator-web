import React from 'react'
import SubscribeButton from '@/features/users/ui/SubscribeButton'
import { Divider } from '@mantine/core'
import UserInfo from '@/entities/creator/ui/UserInfo'
import BackgroundImage from '@/entities/creator/ui/BackgroundImage'

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

'use client'

import React from 'react'
import {Box, Button, getThemeColor} from '@mantine/core'
import {SubscribeModal} from "@/widgets/SubscribeModal/ui";
import {useDisclosure} from "@mantine/hooks";
import {UserProfile} from "@/entities/user/types";

interface SubscribeButtonProps {
  userProfile?: UserProfile
}

const SubscribeButton = ({userProfile} : SubscribeButtonProps) => {
  const [isModalOpened, { open: modalOpen, close: modalClose }] = useDisclosure(false)
  const handleOpenModal = () => {
    modalOpen()
  }

  return (
    <Box p={20}>
      <Button fullWidth radius={40} h={44} onClick={handleOpenModal}>
        구독하기
      </Button>
      <SubscribeModal opened={isModalOpened} onClose={modalClose} userProfile={userProfile}/>
    </Box>
  )
}

export default SubscribeButton

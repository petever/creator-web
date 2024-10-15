'use client'

import React from 'react'
import { Box, Button, Text } from '@mantine/core'
import { SubscribeModal } from '@/widgets/SubscribeModal/ui'
import { useDisclosure } from '@mantine/hooks'
import { UserProfile } from '@/entities/user/types'
import { PAGE } from '@/shared/constants/page'
import Link from 'next/link'

interface SubscribeButtonProps {
  userProfile?: UserProfile
  isSelf?: boolean
}

const SubscribeButton = ({ isSelf, userProfile }: SubscribeButtonProps) => {
  const [isModalOpened, { open: modalOpen, close: modalClose }] = useDisclosure(false)
  const handleOpenModal = () => {
    modalOpen()
  }

  if (isSelf) {
    return (
      <Box p={20}>
        <Link href={PAGE.SETTINGS_PROFILE}>
          <Button fullWidth radius={40} h={44}>
            프로필 편집
          </Button>
        </Link>
      </Box>
    )
  }
  return (
    <Box p={20}>
      <Button fullWidth radius={40} h={44} onClick={handleOpenModal}>
        구독하기
      </Button>
      <SubscribeModal opened={isModalOpened} onClose={modalClose} userProfile={userProfile} />
    </Box>
  )
}

export default SubscribeButton

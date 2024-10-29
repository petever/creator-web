'use client'

import { Avatar, Button, Flex, Group, Box, Modal, Radio, Stack, Text } from '@mantine/core'
import classes from './styles.module.css'
import { IconStar } from '@tabler/icons-react'
import { UserProfile } from '@/entities/user/types'
import { Profile } from '@/features'
import FeedList from '@/widgets/Post/ui/FeedList'
import React from 'react'
import SubscribeCardList from '../../../features/subscribe/ui/SubscribeCardList'
import { useSession } from 'next-auth/react'

interface SubscribeModalProps {
  userProfile?: UserProfile
  opened: boolean
  onClose: () => void
}

export const SubscribeModal = ({ userProfile, opened, onClose }: SubscribeModalProps) => {
  const session = useSession()
  if (!userProfile) return null

  const handleModalClose = () => {
    onClose()
  }

  return (
    <Modal size="md" centered opened={opened} onClose={handleModalClose} title="구독하기">
      <SubscribeCardList userId={session.data?.user?.id} />
    </Modal>
  )
}

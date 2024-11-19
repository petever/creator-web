'use client'

import { NotificationItem } from '@/entities/notifications/ui/NotificationItem'
import { Flex } from '@mantine/core'

export const NotificationList = () => {
  return (
    <Flex direction={'column'} w="600px">
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
    </Flex>
  )
}

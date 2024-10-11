import React from 'react'
import { Flex, Switch, Text } from '@mantine/core'

interface NotificationItemProps {
  label: string
  checked: boolean
}

const NotificationItem = ({ label, checked }: NotificationItemProps) => {
  return (
    <Flex justify="space-between" align="center">
      <Text size="lg">{label}</Text>
      <Switch size="md" checked={checked} />
    </Flex>
  )
}

export default NotificationItem

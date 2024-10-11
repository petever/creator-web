import React from 'react'
import { Flex, Switch, Text } from '@mantine/core'

interface NotificationSettingItemProps {
  label: string
  checked: boolean
}

const NotificationSettingItem = ({ label, checked }: NotificationSettingItemProps) => {
  return (
    <Flex justify="space-between" align="center">
      <Text size="lg">{label}</Text>
      <Switch size="md" checked={checked} />
    </Flex>
  )
}

export default NotificationSettingItem

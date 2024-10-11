import React from 'react'
import { Box, Flex, Text } from '@mantine/core'
import NotificationSettingItem from '@/features/notifications/ui/NotificationSettingItem'
import { NotificationSettingItems } from '@/entities/notifications/types'

interface NotificationGroupProps {
  legend: string
  items: NotificationSettingItems[]
}

const NotificationGroup = ({ legend, items }: NotificationGroupProps) => {
  return (
    <Box p={20} style={{ borderBottom: '1px solid #ddd' }}>
      <Text size="md" fw={600} mb={10}>
        {legend}
      </Text>
      <Flex gap={14} direction="column">
        {items.map((item) => {
          return <NotificationSettingItem label={item.label} checked={item.checked} />
        })}
      </Flex>
    </Box>
  )
}

export default NotificationGroup

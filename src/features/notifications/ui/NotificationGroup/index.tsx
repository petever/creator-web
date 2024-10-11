import React from 'react'
import { Box, Flex, Text } from '@mantine/core'

interface NotificationGroupProps {
  legend: string
  items: any[]
}

const NotificationGroup = ({ legend, items }: NotificationGroupProps) => {
  // console.log(items, items)

  return (
    <Box p={20} style={{ borderBottom: '1px solid #ddd' }}>
      <Text size="md" fw={600} mb={10}>
        {}
      </Text>
      <Flex gap={14} direction="column">
        {/*<NotificationItem label={label} checked={checked} />*/}
      </Flex>
    </Box>
  )
}

export default NotificationGroup

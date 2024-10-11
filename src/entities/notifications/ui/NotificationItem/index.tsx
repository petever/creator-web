'use client'
import { Avatar, Box, Flex, Text } from '@mantine/core'
import Link from 'next/link'

export const NotificationItem = () => {
  return (
    <Link href="/notifications">
      <Flex p={20}>
        <Flex justify="space-between" flex={1}>
          <Flex align="center" gap={12}>
            <Avatar size="md" />
            <Box>
              <Text size="md" fw={600}>
                알람 제목제목
              </Text>
              <Text size="sm">알람 내용내용</Text>
            </Box>
          </Flex>
          <Text c="dark">2021.09.01</Text>
        </Flex>
      </Flex>
    </Link>
  )
}

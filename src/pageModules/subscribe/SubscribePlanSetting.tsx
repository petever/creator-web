'use client'
import React from 'react'
import { Box, Flex, Input } from '@mantine/core'
import Editor from '@/widgets/Editor'

const SubscribePlanSetting = () => {
  return (
    <Box bd="1px solid ">
      <Flex gap={10} direction="column">
        <Input placeholder="구독 플랜 제목" />
        <Input placeholder="가격" />
        <Editor placeholder="플랜 설명" />
      </Flex>
    </Box>
  )
}

export default SubscribePlanSetting

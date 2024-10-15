'use client'
import React from 'react'
import { Flex, Input, Textarea } from '@mantine/core'

const SubscribePlanSetting = () => {
  return (
    <div>
      <Flex gap={10} direction="column">
        <Input />
        <Input />
        <Textarea />
      </Flex>
    </div>
  )
}

export default SubscribePlanSetting

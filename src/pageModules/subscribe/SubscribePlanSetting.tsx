'use client'
import React from 'react'
import { Flex, Input } from '@mantine/core'
import Editor from '@/widgets/Editor'

const SubscribePlanSetting = () => {
  return (
    <div>
      <Flex gap={10} direction="column">
        <Input />
        <Input />
        <Editor />
      </Flex>
    </div>
  )
}

export default SubscribePlanSetting

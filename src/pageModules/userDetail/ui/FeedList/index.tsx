import React from 'react'
import { Post } from '@/widgets/Post/ui'
import { Flex } from '@mantine/core'

const FeedList = () => {
  return (
    <Flex direction="column" gap={30} pt={20} pb={20}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Flex>
  )
}

export default FeedList

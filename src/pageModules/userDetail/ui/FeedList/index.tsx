import React from 'react'
import { Post } from '@/widgets/Post/ui'
import { Flex } from '@mantine/core'
import classes from './styles.module.css'

const FeedList = () => {
  return (
    <div className={classes.wrapper}>
      <Flex direction="column" gap={30} pt={20} pb={20}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Flex>
    </div>
  )
}

export default FeedList

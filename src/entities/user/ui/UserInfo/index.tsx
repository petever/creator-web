import React from 'react'
import { Flex, Text } from '@mantine/core'
import classes from './styles.module.css'

interface UserInfoProps {
  displayName: string
  username: string
}
const UserInfo = ({ displayName, username }: UserInfoProps) => {
  return (
    <div className={classes.wrap}>
      <Text fw={600} size="lg" mt={10}>
        {displayName}
      </Text>
      <Flex>
        <Text size="sm" c="dimmed">
          @{username}
        </Text>
      </Flex>
      <Text mt={10}>
        유저가 적은 글유저가 적은 글유저가 적은 글유저가 적은 글유저가 적은 글유저가 적은 글유저가
        적은 글유저가 적은 글유저가 적은 글유저가 적은 글유저가 적은 글유저가 적은 글
      </Text>
    </div>
  )
}

export default UserInfo

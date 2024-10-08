import React from 'react'
import { Flex, Text } from '@mantine/core'
import classes from './styles.module.css'

interface UserInfoProps {
  displayName: string
  username: string
  status : string
}
const UserInfo = ({ displayName, username, status }: UserInfoProps) => {
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
      <p className={classes.status}>{status}</p>
    </div>
  )
}

export default UserInfo

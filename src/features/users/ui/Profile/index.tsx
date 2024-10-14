import {Avatar, Button, Group, Box, UnstyledButton, MantineSize, Flex} from '@mantine/core'
import classes from './styles.module.css'
import { UserProfile } from '@/entities/user/types'

interface ProfileProps {
  profile: UserProfile
  size: MantineSize
  children ?: React.ReactNode
  onClick?: () => void
}

export const Profile = ({ profile, size = 'sm', children, onClick }: ProfileProps) => {
  if (!profile) return null

  return (
    <Group align="center">
      <div className={!isSubscribed ? '' : classes.subscribedWrapper}>
        <UnstyledButton className={classes.button} onClick={onClick}>
          <Avatar size={size} src={profile.picture as string} />
          <Box>
            <p>{profile.displayName}</p>
            <p>@{profile.username}</p>
          </Box>
        </UnstyledButton>
        {isSubscribed && <Button>구독</Button>}
      </div>
    </Group>
  )
}

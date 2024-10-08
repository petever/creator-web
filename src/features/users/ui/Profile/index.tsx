import { Avatar, Button, Group, Box,  UnstyledButton, MantineSize } from '@mantine/core'
import classes from './styles.module.css'
import {UserProfile} from "@/entities/user/types";

interface ProfileProps {
  profile: UserProfile
  size: MantineSize
  isSubscribed?: boolean
  onClick?: () => void
}

export const Profile = ({ profile, size = 'sm', isSubscribed, onClick }: ProfileProps) => {
  if (!profile) return null

  return (
    <div>
      <Group align="center">
        <div>
          <UnstyledButton className={classes.button} onClick={onClick}>
            <Avatar size={size} src={profile.picture as string} />
            <Box>
              <p>{profile.username}</p>
              <p>#{profile.displayName}</p>
            </Box>
          </UnstyledButton>
          {isSubscribed && <Button>구독</Button>}
        </div>
      </Group>
    </div>
  )
}

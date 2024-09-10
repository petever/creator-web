import {Avatar, Button, Group, MantineSize, UnstyledButton} from '@mantine/core'
import { Avatars } from '@/widgets/types'
import classes from './styles.module.css'

interface ProfileProps {
  profile: Avatars
  size : MantineSize
  isSubscribed ?: boolean
  onClick?: () => void
}

export const Profile = ({ profile, size = 'sm', isSubscribed, onClick }: ProfileProps) => {
  if (!profile) return null

  return (
    <div>
      <Group align="center">
        <div>
          <UnstyledButton className={classes.button} onClick={onClick}>
            <Avatar radius="xl" size={size} color="gray" />
            <p>{profile.name}</p>
            <p>{profile.tag}</p>
          </UnstyledButton>
          {isSubscribed && <Button>구독</Button>}
        </div>
        {profile.description && <p>{profile.description}</p>}
      </Group>
    </div>
  )
}

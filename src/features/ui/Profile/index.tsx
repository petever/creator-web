import {Avatar, AvatarGroup, Button, Group} from "@mantine/core";
import {Avatars} from "../../../widgets/types";

interface ProfileProps {
  profile : Avatars
  onClick?: () => void
}
export const Profile = ({profile,  onClick} : ProfileProps) => {
  if(!profile) return null

  const {name} = profile

  return (
    <div>
      <Group
        align='center'
      >
        <Button
          variant='transparent'
          color='gray'
          onClick={onClick}
        >
          <Avatar radius="xl" color='gray'/>
          <p>{name}</p>
          </Button>
      </Group>
    </div>
  )
}

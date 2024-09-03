import {Avatar, Flex} from "@mantine/core";
import {Avatars} from "../../../widgets/types";

interface ProfileProps {
  profile : Avatars
}
export const Profile = ({profile} : ProfileProps) => {
  if(!profile) return null

  const {name} = profile

  return (
    <Flex>
      <Avatar radius="xl" alt="it's me"/>
      <p>{name}</p>
    </Flex>
  )
}

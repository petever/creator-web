import {Avatars} from "../../types";
import {Combobox} from "@mantine/core";
import Group = Combobox.Group;
import {Profile} from "../../../features/ui/Profile";

interface AvatarListProps {
  avatars : Avatars[]
}
export const AvatarList = ({avatars} : AvatarListProps) => {
  if(!avatars) return null

  return (
    <Group>
      {avatars?.map((avatar : Avatars) => {
        <Profile profile={avatar}/>
      })}
    </Group>
  )
}

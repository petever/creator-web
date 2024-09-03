import {Avatars} from "../../types";
import { Group} from "@mantine/core";
import {Profile} from "../../../features/ui/Profile";

interface AvatarListProps {
  avatars : Avatars[]
  maxLength ?: number
}
export const AvatarList = ({avatars, maxLength} : AvatarListProps) => {
  if(!avatars) return null

  return (
    <Group
      wrap={'nowrap'}
      style={{
        overflowX : !maxLength && 'auto'
      }}
    >
      {avatars?.map((avatar : Avatars, avatarIndex) => {
        return (
          <Profile
            profile={avatar}
          />
        )
      })}
    </Group>
  )
}

import { AvatarList } from '../../AvartarList/ui'
import { Avatars } from '../../types'
import {ActionIcon, Avatar, Flex} from '@mantine/core'
import { IconDots } from '@tabler/icons-react'
import {Profile} from "@/features";

interface PostingHeaderProps {
  profile: Avatars
}

export const PostingHeader = ({ profile }: PostingHeaderProps) => {
  return (
    <Flex
      justify="space-between"
      style={{
        width: '100%',
      }}
    >
      <Profile profile={profile}/>
      <ActionIcon variant="subtle" color="gray" size="xl" aria-label="Toggle color scheme">
        <IconDots />
      </ActionIcon>
    </Flex>
  )
}
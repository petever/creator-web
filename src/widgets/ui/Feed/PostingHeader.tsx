import { AvatarList } from '../AvartarList'
import { Avatars } from '../../types'
import { ActionIcon, Flex } from '@mantine/core'
import { IconDots } from '@tabler/icons-react'

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
      <AvatarList avatars={[profile]} />
      <ActionIcon variant="subtle" color="gray" size="xl" aria-label="Toggle color scheme">
        <IconDots />
      </ActionIcon>
    </Flex>
  )
}

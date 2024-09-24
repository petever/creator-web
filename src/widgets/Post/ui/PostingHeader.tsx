'use client'

import { Avatars } from '../../types'
import {ActionIcon, Flex, Menu} from '@mantine/core'
import {IconDots, IconTrash} from '@tabler/icons-react'
import { Profile } from '@/features'
import { useDisclosure } from '@mantine/hooks'

interface PostingHeaderProps {
  profile: Avatars
}

export const PostingHeader = ({ profile }: PostingHeaderProps) => {
  const [opened, { open, close }] = useDisclosure(false)


  const handleDetailOpen = () => {
    open()
  }

  return (
    <Flex
      justify="space-between"
      align="center"
      style={{
        width: '100%',
      }}
    >
      <Profile profile={profile} size="md" />
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <ActionIcon variant="subtle" color="gray" size="xl">
            <IconDots />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item leftSection={<IconTrash/>}>
            삭제
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Flex>
  )
}

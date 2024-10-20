'use client'

import { ActionIcon, Flex, Menu } from '@mantine/core'
import { IconDots, IconTrash } from '@tabler/icons-react'
import { Profile } from '@/features'
import { useDisclosure } from '@mantine/hooks'
import { DUMMY_PROFILE } from '@/shared/model'
import {UserProfile} from "@/entities/user/types";
import {PAGE} from "@/shared/constants/page";
import {useRouter} from "next/navigation";

interface PostingHeaderProps {
  profile: UserProfile
}

export const PostingHeader = ({ profile }: PostingHeaderProps) => {
  const [opened, { open, close }] = useDisclosure(false)

  const handleDetailOpen = () => {
    open()
  }

  const router = useRouter()

  const goToMemberPage = (name : string) => {
    router.push(PAGE.MEMBER_PAGE(name))
  }

  return (
    <Flex
      justify="space-between"
      align="center"
      p={14}
      style={{
        width: '100%',
      }}
    >
      <Profile profile={profile} size="md" onClick={() => goToMemberPage(profile.username)}/>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <ActionIcon variant="subtle" color="gray" size="xl">
            <IconDots />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item leftSection={<IconTrash />}>삭제</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Flex>
  )
}

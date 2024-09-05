'use client'
import { DummyAvatar } from '../constants/dummy'
import { Flex, Image } from '@mantine/core'
import { FeedButtons } from '@/features/index'
import { AvatarList } from '../AvartarList'
import { PostingHeader } from './PostingHeader'
import { Avatars } from '../types'
import {FeedDetail} from "@/entities/FeedDetail";
import { useDisclosure } from '@mantine/hooks';


interface FeedProps {
  profile?: Avatars
}

export const Feed = ({ profile }: FeedProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleDetailOpen = () => {
    open()
  }

  return (
    <Flex align="flex-start" direction="column" gap="sm" flex="1 1 100%" justify="center">
      <PostingHeader profile={DummyAvatar[0]} />
      <Image
        radius="md"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
      />
      <FeedButtons
        onDetailModal={handleDetailOpen}
      />
      <AvatarList avatars={DummyAvatar} maxLength={3} />
      <FeedDetail opened={opened} onClose={close}/>
    </Flex>
  )
}

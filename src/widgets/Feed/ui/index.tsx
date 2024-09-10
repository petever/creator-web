'use client'
import {Button, Container, Divider, Image} from '@mantine/core'
import {CommentInput, FeedButtons} from '@/features'
import { PostingHeader } from './PostingHeader'
import { Avatars } from '../../types'
import { FeedDetail } from '@/shared/FeedDetail/ui'
import { useDisclosure } from '@mantine/hooks'
import { DummyAvatar } from '@/widgets/AvartarList/constants/dummy'
import {CommentSummary} from "@/entities";

interface FeedProps {
  profile?: Avatars
}

export const Feed = ({ profile }: FeedProps) => {
  const [opened, { open, close }] = useDisclosure(false)

  const handleDetailOpen = () => {
    open()
  }

  return (
    <Container size="xl">
      <PostingHeader profile={DummyAvatar[0]} />
      <Image
        radius="md"
        fit="contain"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
      />
      <FeedButtons id={'feedId_01'} onDetailModal={handleDetailOpen} />
      <CommentSummary/>
			<Button>댓글 0개 보기</Button>
      <FeedDetail opened={opened} onClose={close} />
			<Divider my="md"/>
    </Container>
  )
}

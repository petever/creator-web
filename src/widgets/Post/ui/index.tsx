'use client'
import { Box, Button, Container, Divider, Image } from '@mantine/core'
import { FeedButtons } from '@/features'
import { PostingHeader } from './PostingHeader'
import { Avatars } from '../../types'
import { FeedDetail } from '@/shared/FeedDetail/ui'
import { useDisclosure } from '@mantine/hooks'
import { DummyAvatar } from '@/widgets/AvartarList/constants/dummy'

interface PostProps {
  profile?: Avatars
}

export const Post = ({ profile }: PostProps) => {
  const [opened, { open, close }] = useDisclosure(false)

  const handleDetailOpen = () => {
    open()
  }

  return (
    <Container fluid p={0}>
      <Box p={10}>
        <PostingHeader profile={DummyAvatar[0]} />
      </Box>
      <Image
        radius={0}
        fit="contain"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
      />
      <FeedButtons id={'feedId_01'} onDetailModal={handleDetailOpen} />
      <Box>
        <Button variant="transparent" onClick={handleDetailOpen}>댓글 0개 보기</Button>
        <FeedDetail opened={opened} onClose={close} />
      </Box>
      <Divider my="md" />
    </Container>
  )
}

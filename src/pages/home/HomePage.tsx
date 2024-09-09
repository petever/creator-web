'use client'
import { AvatarList, Feed } from '@/widgets'
import { Container, Flex } from '@mantine/core'
import { DummyAvatar } from '@/widgets/AvartarList/constants/dummy'

const HomePage = () => {
  return (
    <div>
      <Container size="xs">
        Feed
        <AvatarList avatars={DummyAvatar} maxLength={3} />
        <Flex wrap={'wrap'}>
          <Feed />
					<Feed />
					<Feed />
					<Feed />
        </Flex>
      </Container>
    </div>
  )
}

export default HomePage

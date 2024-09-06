import { Container, Flex } from '@mantine/core'
import { Feed } from '@/widgets/Feed'
import { AvatarList } from '@/widgets/index'
import { DummyAvatar } from '@/widgets/constants/dummy'
import classes from './page.module.css'
import {alova} from "@/shared/model/alova";

export const metadata = {
  title: '크리에이터 구독',
}

export default async function Page() {
   return (
    <Container size="xs" className={classes.wrap}>
      <AvatarList avatars={DummyAvatar} />
      <Flex wrap={'wrap'} gap={'50px'}>
        <Feed />
      </Flex>
    </Container>
  )
}

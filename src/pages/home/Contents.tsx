import { Flex, Grid } from '@mantine/core'
import {AvatarList, Feed} from "@/widgets";
import {DummyAvatar} from "@/widgets/AvartarList/constants/dummy";

export const Contents = () => {
  return (
    <div>
      <AvatarList avatars={DummyAvatar} maxLength={3} />
      <Flex wrap={'wrap'}>
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </Flex>
    </div>
  )
}

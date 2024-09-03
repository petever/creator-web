import {Avatar, Flex, Image} from "@mantine/core";
import {FeedButtons, Profile} from "../../../features";
import {DummyAvatar} from "../../constants/dummy";
import {AvatarList} from "../AvartarList";
import {PostingHeader} from "./PostingHeader";
import {Avatars} from "../../types";

interface FeedProps {
  profile : Avatars
}
export const Feed = ({profile} : FeedProps) => {
  return (
    <Flex
      align="flex-start"
      direction='column'
      gap='sm'
      flex='1 1 100%'
      justify="center"
    >
      <PostingHeader profile={DummyAvatar[0]}/>
      <Image
        radius='md'
        src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png'/>
      <FeedButtons/>
      <AvatarList
        avatars={DummyAvatar}
        maxLength={3}
      />
    </Flex>
  )
}

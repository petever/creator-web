import {Button, Center, Container, Flex, Grid, Input} from "@mantine/core";
import {Feed} from "../widgets/ui/Feed";
import {AvatarList} from "../widgets";
import {DummyAvatar} from "../widgets/constants/dummy";
import { Button, Container, Input } from "@mantine/core";

export const metadata = {
  title: "크리에이터 구독",
};

export default function Page() {
  return (
    <Container
      size="xs"
    >
      <AvatarList avatars={DummyAvatar}/>
      <Flex
        wrap={'wrap'}
        gap={'xl'}
      >
        <Feed/>
        <Feed/>
      </Flex>
    <Container>
      <Input size="md" radius="md" placeholder="Login"/>
      <Button variant="filled" color="lime" size='md' fullWidth>LOGIN</Button>
    </Container>
  );
}

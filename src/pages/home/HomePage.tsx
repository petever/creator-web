'use client'
import {AvatarList, Feed} from "@/widgets";
import {DummyAvatar} from "@/widgets/constants/dummy";
import {Container, Flex} from "@mantine/core";
import SignInPage from "@/pages/sign-in/SignInPage";

const HomePage = () => {
    return (
        <Container size="xs">
            <AvatarList avatars={DummyAvatar} />
            <Flex wrap={'wrap'} gap={'50px'}>
                <Feed />
            </Flex>
        </Container>
    )
}

export default HomePage
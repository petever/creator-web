import { signIn } from '@/auth'
import {Button, Container, Flex, Text} from "@mantine/core";
import Image from 'next/image'

const LoginPage = () => {
  return (
    <>
      {/*<ThemeToggleButton />*/}
      <form
        action={async () => {
          'use server'
          await signIn('google')
        }}
      >
        <Container>
          <Flex h={'100vh'} gap="md" justify="center" direction="column" align="center" wrap="wrap">
            <Text
              size="100px"
              fw={700}
              mb={'100px'}
              variant="gradient"
              gradient={{ from: 'teal', to: 'lime', deg: 190 }}
            >
              Shoo
            </Text>
            <Button
              w={300}
              h={50}
              type="submit"
              variant="white"
              color="dark"
              leftSection={
                <Image src="/assets/logo-google.svg" alt="Google" width={20} height={20} />
              }
              // onClick={() => signIn('google')}
            >
              <Text size="xl" fw={700}>
                구글로 시작하기
              </Text>
            </Button>
          </Flex>
        </Container>
      </form>
    </>
  )
}

export default LoginPage

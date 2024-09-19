import { signIn } from '@/auth'

const LoginPage = () => {
  return (
    <>
      {/*<ThemeToggleButton />*/}
      {/*<Container>*/}
      {/*  <Flex mih={50} gap="md" justify="center" direction="column" align="center" wrap="wrap">*/}
      {/*    <Text size="xl" fw={700}>*/}
      {/*      로그인*/}
      {/*    </Text>*/}
      {/*    <Button*/}
      {/*      w={300}*/}
      {/*      h={50}*/}
      {/*      type="button"*/}
      {/*      variant="white"*/}
      {/*      color="dark"*/}
      {/*      leftSection={*/}
      {/*        <Image src="/assets/logo-google.svg" alt="Google" width={20} height={20} />*/}
      {/*      }*/}
      {/*      onClick={() => signIn('google')}*/}
      {/*    >*/}
      {/*      <Text size="xl" fw={700}>*/}
      {/*        구글로 시작하기*/}
      {/*      </Text>*/}
      {/*    </Button>*/}
      {/*  </Flex>*/}
      {/*</Container>*/}
      <form
        action={async () => {
          'use server'
          await signIn('google')
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </>
  )
}

export default LoginPage

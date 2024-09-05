import { Button, Center, Container, Input } from '@mantine/core'

const SignInPage = () => {
  return (
    <>
      SignIn
      <Container>
        <Center>
          <Input size="md" radius="md" placeholder="Login" />
          <Button variant="filled" color="lime" size="md" fullWidth>
            LOGIN
          </Button>
        </Center>
      </Container>
    </>
  )
}

export default SignInPage

import { Button, Center, Container, Input } from '@mantine/core'

export default function signInPage() {
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

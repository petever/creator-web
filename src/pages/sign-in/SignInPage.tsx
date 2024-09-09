import { Button, Center, Container, Input } from '@mantine/core'
import { alova } from '@/shared/model/alova'

const SignInPage = () => {
  const initialData = alova.Post('/login')
  console.log('initialData', initialData)

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

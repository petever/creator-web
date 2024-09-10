'use client'

import { Center, Container } from '@mantine/core'
import { signIn } from 'next-auth/react'

const LoginPage = () => {
  return (
    <>
      SignIn
      <Container>
        <Center>
          <button type="button" onClick={() => signIn('google')}>
            SignIn
          </button>
        </Center>
      </Container>
    </>
  )
}

export default LoginPage

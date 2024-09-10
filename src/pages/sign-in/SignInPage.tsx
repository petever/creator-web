'use client'
import { Button, Center, Container, Input } from '@mantine/core'
import { alova } from '@/shared/model/alova'
import { signIn } from 'next-auth/react'

const SignInPage = () => {
  const initialData = alova.Post('/login')
  console.log('initialData', initialData)

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

export default SignInPage

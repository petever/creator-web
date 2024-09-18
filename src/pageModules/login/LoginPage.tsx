'use client'

import { Button, Container, Flex, Text } from '@mantine/core'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { ThemeToggleButton } from '@/widgets'

const LoginPage = () => {
  return (
    <>
      <ThemeToggleButton />
      <Container>
        <Flex mih={50} gap="md" justify="center" direction="column" align="center" wrap="wrap">
          <Text size="xl" fw={700}>
            로그인
          </Text>
          <Button
            w={300}
            h={50}
            type="button"
            variant="white"
            color="dark"
            leftSection={
              <Image src="/assets/logo-google.svg" alt="Google" width={20} height={20} />
            }
            onClick={() => signIn('google')}
          >
            <Text size="xl" fw={700}>
              구글로 시작하기
            </Text>
          </Button>
        </Flex>
      </Container>
    </>
  )
}

export default LoginPage

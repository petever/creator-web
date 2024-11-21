'use client'
import { Modal, Button, Text, Avatar, Flex } from '@mantine/core'
import classes from './styles.module.css'
import { Owner } from '@/shared/types'
import Image from 'next/image'

interface LoginModalProps {
  owner?: Owner
  opened: boolean
  onClose: () => void
}
export const LoginModal = ({ owner, opened, onClose }: LoginModalProps) => {
  const handleLogin = async () => {
    // TODO : 로그인 로직 추가 필요
    // return await signIn('google')
  }

  if (!opened) return null

  return (
    <Modal
      size="100%"
      opened={opened}
      onClose={onClose}
      centered
      withCloseButton={true}
      classNames={{
        content: classes.wrapper,
      }}
    >
      <Flex direction={'column'} justify={'center'} align={'center'}>
        {owner && (
          <Flex direction={'column'} justify={'center'} align={'center'} gap={'10'} mb={40}>
            <Avatar src={owner.picture as string} w={80} h={80} />
            <p>{owner.displayName}님의 글 더 보기</p>
            <p>인플루언서의 사진과 동영상을 보려면 가입하세요.</p>
          </Flex>
        )}
        {/* TODO : Login 컴포넌트 분리 필요(form) */}
        <form onSubmit={handleLogin}>
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
        </form>
      </Flex>
    </Modal>
  )
}

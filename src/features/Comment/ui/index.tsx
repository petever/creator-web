import { Avatar, Button } from '@mantine/core'
import { router } from 'next/client'

export const Comment = () => {
  const handleUserMoveToPage = () => {
    // TODO : 사용자 개인 페이지로 이동
    router.push('')
  }

  return (
    <>
      <Button variant="transparent" color="gray" onClick={handleUserMoveToPage}>
        <Avatar radius="xl" color="gray" />
        유저명
      </Button>
    </>
  )
}

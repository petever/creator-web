import { Avatar, Button } from '@mantine/core'
import { router } from 'next/client'

export const Comment = () => {
  return (
    <>
      <Button variant="transparent" color="gray">
        <Avatar radius="xl" color="gray" />
        유저명
      </Button>
    </>
  )
}

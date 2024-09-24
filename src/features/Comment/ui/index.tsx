import {Avatar, Button, UnstyledButton} from '@mantine/core'
import classes  from './styles.module.css'
import {useRouter} from "next/navigation";

export const Comment = () => {
  const router = useRouter()

  const handleMemberPageMove = () => {
    router.push('/3')
  }

  return (
    <UnstyledButton variant="transparent" color="gray" className={classes.wrapper} onClick={handleMemberPageMove}>
      <Avatar size='sm' radius="xl" color="gray" />
      유저명
    </UnstyledButton>
  )
}

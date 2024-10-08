import classes from './stlyes.module.css'

interface UserStatusProps{
  status: string
}
export const UserStatus = ({status} : UserStatusProps) => {
  return (
    <p className={classes.status}>{status}</p>
  )
}

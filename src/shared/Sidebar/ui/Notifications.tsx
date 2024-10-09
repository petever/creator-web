import { Button, Container, Drawer } from '@mantine/core'
import classes from '@/shared/Sidebar/ui/styles.module.css'

interface NotificationsProps {
  opened: boolean
  onClose: () => void
}

export const Notifications = ({ opened, onClose }: NotificationsProps) => {
  return (
    <Drawer opened={opened} onClose={onClose} className={classes.drawerWrapper} withOverlay={false}>
      <Container>알림어떻게 나오냐 안나오냐!</Container>
    </Drawer>
  )
}

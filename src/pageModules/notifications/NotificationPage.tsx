import { NotificationList } from '@/entities/notifications/ui/NotificationList'
import { Header } from '@/shared/ui/header'
import { getServerNotifications } from '@/entities/notifications/api/getServerNotifications'

const NotificationPage = async () => {
  const notifications = await getServerNotifications()
  return (
    <div className="w-full">
      <Header text="알람" isBack isBorder />
      <NotificationList notifications={notifications} />
    </div>
  )
}

export default NotificationPage

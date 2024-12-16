import { NotificationList } from '@/entities/notifications/ui/NotificationList'
import { getServerNotifications } from '@/entities/notifications/api/getServerNotifications'

const NotificationPage = async () => {
  const notifications = await getServerNotifications()
  return (
    <div className="w-full">
      <NotificationList notifications={notifications} />
    </div>
  )
}

export default NotificationPage

import { NotificationList } from '@/entities/notifications/ui/NotificationList'
import { Header } from '@/shared/ui/header'
import { getServerNotifications } from '@/entities/notifications/api/getServerNotifications'

const NotificationPage = async () => {
  const result = await getServerNotifications()
  console.log(result)
  return (
    <div className="w-full max-w-[900px]">
      <Header text="알람" isBack isBorder />
      <NotificationList />
    </div>
  )
}

export default NotificationPage

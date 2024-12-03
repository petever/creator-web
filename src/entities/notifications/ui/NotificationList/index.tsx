'use client'

import { NotificationItem } from '@/entities/notifications/ui/NotificationItem'
import { Notification } from '@/entities/notifications/types'
import { useNotifications } from '@/entities/notifications/hooks/useNotifications'
import { Empty } from '@/shared/ui/empty'

interface NotificationListProps {
  notifications?: Notification[]
}

export const NotificationList = ({ notifications }: NotificationListProps) => {
  const { data: notificationsItems } = useNotifications(notifications)

  const isEmpty = notificationsItems?.length === 0

  if (isEmpty) {
    return <Empty />
  }

  return (
    <ul className="flex flex-col">
      {notificationsItems?.map((notification) => (
        <NotificationItem
          key={notification.id}
          title={notification.title}
          message={notification.message}
          isRead={notification.isRead}
          createdAt={notification.createdAt}
        />
      ))}
    </ul>
  )
}

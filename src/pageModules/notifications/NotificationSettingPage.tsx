'use client'

import NotificationGroup from '@/features/notifications/ui/NotificationGroup'
import { NotificationContents } from '@/entities/notifications/types'

const NotificationSettingPage = () => {
  const notificationNameItems = [
    {
      label: '메세지',
      value: 'message',
    },
    {
      label: '크리에이터',
      value: 'creator',
    },
  ]
  const notificationContents: NotificationContents = {
    message: [
      {
        label: '채팅 메세지',
        checked: true,
      },
    ],
    creator: [
      {
        label: '구독 중인 크리에이터',
        checked: true,
      },
    ],
  }

  return (
    <>
      {notificationNameItems.map((item) => {
        return <NotificationGroup legend={item.label} items={notificationContents[item.value]} />
      })}
    </>
  )
}

export default NotificationSettingPage

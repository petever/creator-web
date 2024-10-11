'use client'

import NotificationGroup from '@/features/notifications/ui/NotificationGroup'

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
  const notificationContents = {
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
        console.log(notificationContents[item.value])
        return (
          <div>
            <NotificationGroup legend={item.label} items={[]} />
          </div>
        )
      })}
    </>
  )
}

export default NotificationSettingPage

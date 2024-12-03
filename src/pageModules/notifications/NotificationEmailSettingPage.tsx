'use client'

import NotificationSettingItem from '@/features/notifications/ui/NotificationSettingItem'
import { Header } from '@/shared/ui/header'

const NotificationEmailSettingPage = () => {
  const items = [
    {
      label: '채팅 메시지',
      checked: true,
    },
    {
      label: '구독 중인 크리에이터 새 포스트',
      checked: true,
    },
    {
      label: '멘션',
      checked: true,
    },
  ]

  return (
    <div className="w-full max-w-screen-sm">
      <Header text="이메일 알림 설정" isBack isBorder align="center" />
      <div className="py-4">
        {items.map((item) => {
          return (
            <NotificationSettingItem key={item.label} checked={item.checked} label={item.label} />
          )
        })}
      </div>
    </div>
  )
}

export default NotificationEmailSettingPage

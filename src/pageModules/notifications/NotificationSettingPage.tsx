import { Header } from '@/shared/ui/header'
import { SettingList } from '@/widgets/SettingList/ui'
import { PAGE } from '@/shared/constants/page'

const NotificationSettingPage = () => {
  const ITEMS = [{ label: '이메일 설정', href: PAGE.SETTINGS_NOTIFICATION_EMAIL }]
  return (
    <div className="w-full">
      <Header text="알람 설정" isBack isBorder />
      <SettingList items={ITEMS} />
    </div>
  )
}

export default NotificationSettingPage

import { SettingList } from '@/widgets/SettingList/ui'
import { SETTING_LISTS } from '@/widgets/SettingList/constants'
import LogoutModal from '@/features/users/ui/LogoutModal'

const SettingListPage = () => {
  return (
    <>
      <SettingList items={SETTING_LISTS} />
      <LogoutModal />
    </>
  )
}

export default SettingListPage

import { SettingList } from '@/widgets/SettingList/ui'
import { CommonLayout } from '@/app/layouts/CommonLayout'
import { SETTING_LISTS } from '@/widgets/SettingList/constants'

const SettingListPage = () => {
  return (
    <CommonLayout>
      <SettingList items={SETTING_LISTS} />
    </CommonLayout>
  )
}

export default SettingListPage

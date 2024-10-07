import { SettingList } from '@/widgets/SettingList/ui'
import { SidebarLayout } from '@/app/layouts/SidebarLayout'

const SettingListPage = () => {
  return (
    <SidebarLayout title={'설정'}>
      <SettingList />
    </SidebarLayout>
  )
}

export default SettingListPage

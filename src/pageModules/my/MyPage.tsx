import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'
import { getServerProfile } from '@/entities/user/api/getServerProfile'
import MyProfile from '@/widgets/user/ui/MyProfile'

const MyPage = async () => {
  const initialData = await getServerProfile()

  return (
    <>
      <MyProfile userProfile={initialData} />
      <ContentTabs />
    </>
  )
}

export default MyPage

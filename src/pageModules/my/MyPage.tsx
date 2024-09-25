import MyProfile from '@/widgets/MyProfile'
import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'
import { getServerProfile } from '@/entities/user/api/getServerProfile'

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

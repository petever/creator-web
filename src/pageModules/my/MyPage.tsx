import Profile from '@/widgets/Profile'
import { getMy } from '@/entities/user/api/getMy'
import MyProfile from '@/widgets/MyProfile'
import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'

const MyPage = async () => {
  const result = await getMy()

  return (
    <>
      <MyProfile />
      <ContentTabs />
    </>
  )
}

export default MyPage

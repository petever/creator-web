import MyProfile from '@/widgets/MyProfile'
import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'
import { getProfile } from '@/entities/user/api/getProfile'

const MyPage = async () => {
  // const result = await getProfile()
  // console.log(result, 'result')

  return (
    <>
      <MyProfile
        picture={'result.picture'}
        username={'result.username'}
        displayName={'result.displayName'}
      />
      <ContentTabs />
    </>
  )
}

export default MyPage

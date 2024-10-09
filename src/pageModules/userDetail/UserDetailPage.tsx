import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'
import { ProfileTopSection } from '@/features/users/ui/ProfileTopSection'
import SubscribeButton from '@/features/users/ui/SubscribeButton'
import { getServerProfile } from '@/entities/user/api/getServerProfile'

const UserDetailPage = async () => {
  const userProfile = await getServerProfile()

  return (
    <div>
      <ProfileTopSection
        userProfile={userProfile}
        children={<SubscribeButton userProfile={userProfile} />}
      />
      <ContentTabs />
    </div>
  )
}

export default UserDetailPage

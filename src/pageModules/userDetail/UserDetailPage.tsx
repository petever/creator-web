import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'
import { ProfileTopSection } from '@/features/users/ui/ProfileTopSection'
import SubscribeButton from '@/features/users/ui/SubscribeButton'
import { getServerProfile } from '@/entities/user/api/getServerProfile'
import { UserProfile } from '@/entities/user/types'
import {getServerFeeds} from "@/entities/feeds/api/getServerFeeds";

interface UserDetailPageProps {
  params : {
    userName ?: string
  }
}

const UserDetailPage = async ({params} : UserDetailPageProps) => {
  const {userName} = params

  const userProfile = await getServerProfile()
  const initialFeeds = await getServerFeeds(userName)

  return (
    <div>
      <ProfileTopSection
        userProfile={userProfile}
        children={<SubscribeButton userProfile={userProfile} />}
      />
      <ContentTabs
        initialFeeds={initialFeeds}
        userName={userName}
      />
    </div>
  )
}

export default UserDetailPage

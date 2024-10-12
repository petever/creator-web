import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'
import { ProfileTopSection } from '@/features/users/ui/ProfileTopSection'
import SubscribeButton from '@/features/users/ui/SubscribeButton'
import { getServerProfile } from '@/entities/user/api/getServerProfile'
import { getServerFeeds } from '@/entities/feeds/api/getServerFeeds'

interface UserDetailPageProps {
  params: {
    id?: string
  }
}

const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  const { id } = params

  const userProfile = await getServerProfile()
  const initialFeeds = await getServerFeeds(id)
  console.log(initialFeeds, 'initialFeeds')

  return (
    <div>
      {/*<ProfileTopSection*/}
      {/*  userProfile={userProfile}*/}
      {/*  children={<SubscribeButton userProfile={userProfile} />}*/}
      {/*/>*/}
      <ContentTabs initialFeeds={initialFeeds} username={id} />
    </div>
  )
}

export default UserDetailPage

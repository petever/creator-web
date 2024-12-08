import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'
import { ProfileTopSection } from '@/features/users/ui/ProfileTopSection'
import SubscribeButton from '@/features/users/ui/SubscribeButton'
import { getServerFeeds } from '@/entities/feeds/api/getServerFeeds'
import { auth } from '@/auth'
import { getUser } from '@/entities/user/api/getUser'

interface UserDetailPageProps {
  params: {
    username: string
  }
}

const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  const username = params.username
  const session = await auth()
  const userProfile = await getUser(username)
  const initialFeeds = await getServerFeeds(username)
  // const test = await getServerSubscribe(session?.user?.id)
  const isSelf = session?.user?.id === userProfile.id

  return (
    <div className="flex justify-center flex-1 md:p-0">
      <div className="w-full md:max-w-screen-sm p-2">
        <ProfileTopSection
          userProfile={userProfile}
          render={<SubscribeButton isSelf={isSelf} userProfile={userProfile} />}
        />
        <ContentTabs initialFeeds={initialFeeds} username={username} />
      </div>
    </div>
  )
}

export default UserDetailPage

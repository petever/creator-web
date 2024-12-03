import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'
import { ProfileTopSection } from '@/features/users/ui/ProfileTopSection'
import SubscribeButton from '@/features/users/ui/SubscribeButton'
import { getServerFeeds } from '@/entities/feeds/api/getServerFeeds'
import { getServerUser } from '@/entities/user/api/getServerUser'
import { auth } from '@/auth'

interface UserDetailPageProps {
  params: {
    username: string
  }
}

const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  const username = params.username
  const session = await auth()
  const userProfile = await getServerUser(username)
  const initialFeeds = await getServerFeeds(username)
  // const test = await getServerSubscribe(session?.user?.id)
  // console.log(test, '1121321332133131232')
  const isSelf = session?.user?.id === userProfile.id

  return (
    <div className="flex justify-center flex-1 md:p-0">
      <div className="w-full md:max-w-screen-sm">
        <ProfileTopSection
          username={username}
          userProfile={userProfile}
          render={<SubscribeButton isSelf={isSelf} userProfile={userProfile} />}
        />
        <ContentTabs initialFeeds={initialFeeds} username={username} />
      </div>
    </div>
  )
}

export default UserDetailPage

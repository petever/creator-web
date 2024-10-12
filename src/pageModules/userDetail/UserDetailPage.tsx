import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'
import { ProfileTopSection } from '@/features/users/ui/ProfileTopSection'
import SubscribeButton from '@/features/users/ui/SubscribeButton'
import { getServerProfile } from '@/entities/user/api/getServerProfile'
import { UserProfile } from '@/entities/user/types'
import {getServerFeeds} from "@/entities/feeds/api/getServerFeeds";
import {headers} from "next/headers";
import {FeedResponse} from "@/entities/feeds/types";

interface UserDetailPageProps {
  params : {
    id ?: string
  }
}

const UserDetailPage = async ({params} : UserDetailPageProps) => {
  const {id} = params

  const userProfile = await getServerProfile()
  const initialFeeds = await getServerFeeds(id)

  return (
    <div>
      <ProfileTopSection
        userProfile={userProfile}
        children={<SubscribeButton userProfile={userProfile} />}
      />
      <ContentTabs
        initialFeeds={initialFeeds}
        userName={id}
      />
    </div>
  )
}

export default UserDetailPage

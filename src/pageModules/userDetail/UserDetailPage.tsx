import Profile from '@/widgets/Profile'
import FeedList from '@/pageModules/userDetail/ui/FeedList'
import { Tabs } from '@mantine/core'
import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'

const UserDetailPage = () => {
  return (
    <div>
      <Profile />
      <ContentTabs />
    </div>
  )
}

export default UserDetailPage

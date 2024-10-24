import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'
import { ProfileTopSection } from '@/features/users/ui/ProfileTopSection'
import SubscribeButton from '@/features/users/ui/SubscribeButton'
import { getServerFeeds } from '@/entities/feeds/api/getServerFeeds'
import { getServerUser } from '@/entities/user/api/getServerUser'
import { auth } from '@/auth'
import { Box, Flex } from '@mantine/core'

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

  const isSelf = session?.user?.id === userProfile.id

  return (
    <Flex justify="center" flex={1}>
      <Box maw={600} w="100%">
        <ProfileTopSection
          username={username}
          userProfile={userProfile}
          render={<SubscribeButton isSelf={isSelf} userProfile={userProfile} />}
        />
        <ContentTabs initialFeeds={initialFeeds} username={username} />
      </Box>
    </Flex>
  )
}

export default UserDetailPage

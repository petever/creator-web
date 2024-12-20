import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'
import { ProfileTopSection } from '@/features/users/ui/ProfileTopSection'
import { getServerFeeds } from '@/entities/feeds/api/getServerFeeds'
import { auth } from '@/auth'
import { getUser } from '@/entities/user/api/getUser'
import React from 'react'
import { BorderLayout } from '@/app/layouts/BorderLayout'

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
  const isSelf = session?.user?.id === userProfile.id

  return (
    <div className="w-full h-full md:max-w-screen-sm">
      <BorderLayout>
        <ProfileTopSection userProfile={userProfile} isSelf={isSelf} />
        <ContentTabs initialFeeds={initialFeeds} username={username} />
      </BorderLayout>
    </div>
  )
}

export default UserDetailPage

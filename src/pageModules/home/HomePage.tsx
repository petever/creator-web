'use client'

import React from 'react'
import FeedList from '../../widgets/Post/ui/FeedList'
import { FeedResponse } from '@/entities/feeds/types'
import { RecommendList } from '@/shared/RecommentList/ui/RecommendList'
import { UserProfile } from '@/entities/user/types'
import { BorderLayout } from '@/app/layouts/BorderLayout'

interface HomePageProps {
  initialFeeds: FeedResponse
  recommends: UserProfile[]
}

const HomePage = ({ initialFeeds, recommends }: HomePageProps) => {
  return (
    <div
      className="
      relative
      mt-8
      px-5
      overflow-x-hidden
      md:flex justify-center gap-4 ppt-0 md:pb-0 md:flex-row-reverse
    "
    >
      <div>
        <RecommendList recommends={recommends} />
      </div>
      <BorderLayout>
        <FeedList initialFeeds={initialFeeds} />
      </BorderLayout>
    </div>
  )
}

export default HomePage

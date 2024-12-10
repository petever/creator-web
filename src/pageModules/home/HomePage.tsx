'use client'

import React from 'react'
import FeedList from '../../widgets/Post/ui/FeedList'
import { FeedResponse } from '@/entities/feeds/types'
import { UserProfile } from '@/entities/user/types'
import { BorderLayout } from '@/app/layouts/BorderLayout'
import { RecommendList } from '@/shared/RecommentList/ui/RecommendList'

interface HomePageProps {
  initialFeeds: FeedResponse
  recommends: UserProfile[]
}

const HomePage = ({ initialFeeds, recommends }: HomePageProps) => {
  return (
    <div
      className="
      relative
      md:flex pt-0 md:pb-0 md:flex-row-reverse md:justify-end
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

'use client'

import React from 'react'
import FeedList from '../../widgets/Post/ui/FeedList'
import { FeedResponse } from '@/entities/feeds/types'
import { RecommendList } from '@/shared/RecommentList/ui/RecommendList'
import { UserProfile } from '@/entities/user/types'

interface HomePageProps {
  initialFeeds: FeedResponse
  recommends: UserProfile[]
}

const HomePage = ({ initialFeeds, recommends }: HomePageProps) => {
  return (
    <div className="relative flex justify-center gap-4 md:pt-0 flex-col-reverse md:pb-0 md:flex-row">
      <FeedList initialFeeds={initialFeeds} />
      <div className={'mt-5'}>
        <RecommendList recommends={recommends} />
      </div>
    </div>
  )
}

export default HomePage

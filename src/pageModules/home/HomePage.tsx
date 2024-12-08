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
    <div className="
      relative
      px-5
      overflow-x-hidden
      md:flex justify-center gap-4 ppt-0 md:pb-0 md:flex-row-reverse
    ">
      <div className={'mt-5'}>
        <RecommendList recommends={recommends}/>
      </div>
      <FeedList initialFeeds={initialFeeds}/>
    </div>
  )
}

export default HomePage

'use client'

import React from 'react'
import FeedList from '../../widgets/Post/ui/FeedList'
import { FeedResponse } from '@/entities/feeds/types'
import classes from './styles.module.css'
import { RecommendList } from '@/shared/RecommentList/ui/RecommendList'
import { UserProfile } from '@/entities/user/types'

interface HomePageProps {
  initialFeeds: FeedResponse
  recommends: UserProfile[]
}

const HomePage = ({ initialFeeds, recommends }: HomePageProps) => {
  return (
    <div className="flex justify-center gap-10">
      <FeedList initialFeeds={initialFeeds} />
      <div className={'mt-5'}>
        <RecommendList recommends={recommends} />
      </div>
    </div>
  )
}

export default HomePage

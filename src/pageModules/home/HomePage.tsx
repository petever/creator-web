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
    <div className={classes.wrapper}>
      <FeedList initialFeeds={initialFeeds} />
      <div className={classes.recommend}>
        <RecommendList recommends={recommends} />
      </div>
    </div>
  )
}

export default HomePage

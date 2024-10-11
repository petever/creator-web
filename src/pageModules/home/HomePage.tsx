'use client'
import React, {useEffect} from 'react'
import FeedList from '@/pageModules/home/ui/FeedList'
import { Feeds } from '@/entities/feeds/types'

interface HomePageProps {
  initialFeeds: Feeds
  userName ?: string
}

const HomePage = ({ initialFeeds, userName }: HomePageProps) => {
  return <FeedList
    initialFeeds={initialFeeds}
    userName={userName}
  />
}

export default HomePage

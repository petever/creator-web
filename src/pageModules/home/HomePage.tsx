'use client'

import React from 'react'
import FeedList from '@/pageModules/home/ui/FeedList'
import { Feeds } from '@/entities/feeds/types'
import { useFeeds } from '@/entities/feeds/hooks/useFeeds'

interface HomePageProps {
  initialFeeds: Feeds
}

const HomePage = ({ initialFeeds }: HomePageProps) => {
  const { data } = useFeeds({ initialData: initialFeeds })
  console.log(data, 'data')
  return <FeedList />
}

export default HomePage

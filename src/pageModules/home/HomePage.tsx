'use client'
import React, {useEffect} from 'react'
import FeedList from '@/pageModules/home/ui/FeedList'
import {FeedContents, FeedResponse, Feeds} from '@/entities/feeds/types'
import classes from './styles.module.css'

interface HomePageProps {
  initialFeeds: FeedResponse
  userName ?: string
}

const HomePage = ({ initialFeeds, userName }: HomePageProps) => {

  return (
    <div className={classes.wrapper}>
      <FeedList
        initialFeeds={initialFeeds}
        userName={userName}
      />
    </div>
  )
}

export default HomePage

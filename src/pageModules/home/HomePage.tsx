'use client'
import React from 'react'
import FeedList from '@/pageModules/home/ui/FeedList'
import {FeedResponse, Feeds} from '@/entities/feeds/types'
import classes from './styles.module.css'

interface HomePageProps {
  initialFeeds: FeedResponse
  userName?: string
}

const HomePage = ({ initialFeeds, userName }: HomePageProps) => {
  return (
    <div className={classes.wrapper}>
      <FeedList initialFeeds={initialFeeds} />
    </div>
  )
}

export default HomePage

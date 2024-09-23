import React from 'react'
import FeedList from '@/pageModules/home/ui/FeedList'
import { Feeds } from '@/entities/feeds/types'
import classes from './styles.module.css'

interface HomePageProps {
  initialFeeds: Feeds
}

const HomePage = ({ initialFeeds }: HomePageProps) => {
  return (
    <div className={classes.wrapper}>
      <FeedList />
    </div>
  )
}

export default HomePage

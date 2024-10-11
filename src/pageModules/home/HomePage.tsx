'use client'
import React from 'react'
import FeedList from '@/pageModules/home/ui/FeedList'
import { Feeds } from '@/entities/feeds/types'
import classes from './styles.module.css'
import {getFeeds} from "@/entities/feeds/api/getFeeds";
import {useFeeds} from "@/entities/feeds/hooks/useFeeds";

interface HomePageProps {
  initialFeeds: Feeds
  userName ?: string
}

const HomePage = ({ initialFeeds, userName }: HomePageProps) => {
  const { data } = useFeeds(initialFeeds, userName)
  return <FeedList list={data.contents}/>
}

export default HomePage

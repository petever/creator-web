'use client'

import { useSession } from 'next-auth/react'
import React from 'react'
import FeedList from '@/pageModules/home/ui/FeedList'

const HomePage = () => {
  console.log(useSession())
  return <FeedList />
}

export default HomePage

'use client'
import React from 'react'
import { FeedResponse } from '@/entities/feeds/types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs'
import FeedList from '@/widgets/Post/ui/FeedList'
import { Grid2X2, Rows } from 'lucide-react'

interface ContentTabsProps {
  initialFeeds: FeedResponse
  username?: string
}

const ContentTabs = ({ initialFeeds, username }: ContentTabsProps) => {
  return (
    <Tabs defaultValue="row" className="">
      <TabsList>
        <TabsTrigger value="row">
          <Rows />
        </TabsTrigger>
        <TabsTrigger value="grid">
          <Grid2X2 />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="row">
        <FeedList initialFeeds={initialFeeds} username={username} />
      </TabsContent>
      <TabsContent value="grid"></TabsContent>
    </Tabs>
  )
}

export default ContentTabs

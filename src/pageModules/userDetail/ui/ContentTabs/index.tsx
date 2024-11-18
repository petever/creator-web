'use client'
import React from 'react'
import { FeedResponse } from '@/entities/feeds/types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs'
import FeedList from '@/widgets/Post/ui/FeedList'

interface ContentTabsProps {
  initialFeeds: FeedResponse
  username?: string
}

const ContentTabs = ({ initialFeeds, username }: ContentTabsProps) => {
  return (
    <Tabs defaultValue="posts" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="posts">게시물</TabsTrigger>
        <TabsTrigger value="all">모두</TabsTrigger>
      </TabsList>
      <TabsContent value="posts">
        <FeedList initialFeeds={initialFeeds} username={username} />
      </TabsContent>
      <TabsContent value="all">111</TabsContent>
    </Tabs>
  )
}

export default ContentTabs

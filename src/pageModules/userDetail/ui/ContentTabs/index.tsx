'use client'
import React from 'react'
import { Tabs } from '@mantine/core'
import { FeedResponse } from '@/entities/feeds/types'
import FeedList from '../../../../widgets/Post/ui/FeedList'

interface ContentTabsProps {
  initialFeeds: FeedResponse
  username?: string
}

const ContentTabs = ({ initialFeeds, username }: ContentTabsProps) => {
  return (
    <>
      <Tabs defaultValue="posts" h={50}>
        <Tabs.List h={50}>
          <Tabs.Tab value="posts" w="50%" h={50}>
            게시물 (30)
          </Tabs.Tab>
          <Tabs.Tab value="all" w="50%" h={50}>
            모두
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="posts">
          <FeedList initialFeeds={initialFeeds} username={username} />
        </Tabs.Panel>
        <Tabs.Panel value="all">모두</Tabs.Panel>
      </Tabs>
    </>
  )
}

export default ContentTabs

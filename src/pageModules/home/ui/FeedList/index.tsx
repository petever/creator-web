import React from 'react'
import { Post } from '@/widgets/Post/ui'
import { Flex } from '@mantine/core'
import {FeedContents, Feeds} from "@/entities/feeds/types";
import {useFeeds} from "@/entities/feeds/hooks/useFeeds";

interface FeedListProps {
  initialFeeds: Feeds
  userName ?: string
}

const FeedList = ({ initialFeeds, userName } : FeedListProps) => {
  const { data } = useFeeds(initialFeeds, userName)

  const list = data?.content

  if(!data) return null

  return (
    <Flex direction="column" gap={20} pt={20} pb={20}>
      {list?.map((feed) => (
        <Post key={feed.id} feed={feed}/>
      ))}
    </Flex>
  )
}

export default FeedList

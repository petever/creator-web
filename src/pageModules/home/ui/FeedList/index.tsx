import React, {useEffect} from 'react'
import { Post } from '@/widgets/Post/ui'
import { Flex } from '@mantine/core'
import {FeedContents, FeedResponse, Feeds} from "@/entities/feeds/types";
import { useInView } from 'react-intersection-observer'
import useFeeds from "@/entities/feeds/hooks/useFeeds";

interface FeedListProps {
  initialFeeds: FeedResponse
  userName ?: string
}

const FeedList = ({ initialFeeds, userName } : FeedListProps) => {
  const { ref, inView } = useInView()

  const { data, hasNextPage, fetchNextPage, refetch } = useFeeds(initialFeeds, userName)

  const fetchMore = () => {
    if (!inView) {
      return
    }
    void fetchNextPage()
  }

  useEffect(() => {
    fetchMore()
  }, [inView, hasNextPage])

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

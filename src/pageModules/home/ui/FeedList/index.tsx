import React, {useEffect} from 'react'
import { Post } from '@/widgets/Post/ui'
import { Flex } from '@mantine/core'
import {FeedContents, Feeds} from "@/entities/feeds/types";
import { useInView } from 'react-intersection-observer'
import useFeeds from "@/entities/feeds/hooks/useFeeds";

interface FeedListProps {
  initialFeeds: Feeds
  userName ?: string
}

const FeedList = ({ initialFeeds, userName } : FeedListProps) => {
  // const { ref, inView } = useInView()

  const { data, hasNextPage, fetchNextPage, refetch } = useFeeds(initialFeeds, userName)

  const fetchMore = () => {
    if (!inView) {
      return
    }
    void fetchNextPage()
  }

  //
  // useEffect(() => {
  //   // fetchMore()
  // }, [inView, hasNextPage])
  console.log('data', data)

  if(!data) return null

  return (
    <Flex direction="column" gap={20} pt={20} pb={20}>
      {data.pages?.map((feed : FeedContents, index) => (
        <Post key={`feed_${index}`} feed={feed}/>
      ))}
      {/*<div ref={ref}></div>*/}
    </Flex>
  )
}

export default FeedList

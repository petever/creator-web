import React, { useMemo } from 'react'
import { Post } from '@/widgets/Post/ui'
import { Flex } from '@mantine/core'
import { Feeds } from '@/entities/feeds/types'
import { useInView } from 'react-intersection-observer'
import useFeeds from '@/entities/feeds/hooks/useFeeds'

interface FeedListProps {
  initialFeeds: Feeds
  username?: string
}

const FeedList = ({ initialFeeds, username }: FeedListProps) => {
  const { ref, inView } = useInView()

  const { data, hasNextPage, fetchNextPage, refetch } = useFeeds(initialFeeds, username)

  const postings = useMemo(() => (data ? data.pages.flatMap(({ content }) => content) : []), [data])

  // const fetchMore = () => {
  //   if (!inView) {
  //     return
  //   }
  //   void fetchNextPage()
  // }
  //
  // useEffect(() => {
  //   fetchMore()
  // }, [inView, hasNextPage])

  console.log(inView, 'inView')
  if (!data) return null

  return (
    <Flex direction="column" gap={20} pt={20} pb={20}>
      {postings.map((posting) => (
        <Post key={posting.id} feed={posting} />
      ))}
      <div ref={ref}></div>
    </Flex>
  )
}

export default FeedList

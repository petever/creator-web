import React from 'react'
import { Post } from '@/widgets/Post/ui'
import { Flex } from '@mantine/core'
import {FeedContents, Feeds} from "@/entities/feeds/types";

interface FeedListProps {
  list : FeedContents[]
}

const FeedList = ({ list } : FeedListProps) => {
  return (
    <Flex direction="column" gap={20} pt={20} pb={20}>
      {list?.map((feed) => (
        <Post key={feed.id} />
      ))}
    </Flex>
  )
}

export default FeedList

import React, { useEffect, useMemo, useRef } from 'react'
import { FeedResponse } from '@/entities/feeds/types'
import { useInView } from 'react-intersection-observer'
import useFeeds from '@/entities/feeds/hooks/useFeeds'
import { Post } from '@/widgets/Post/ui'

interface FeedListProps {
  initialFeeds: FeedResponse
  username?: string
}

const FeedList = ({ initialFeeds, username }: FeedListProps) => {
  const scrollPositionRef = useRef(0)

  const { ref, inView } = useInView()

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useFeeds(initialFeeds, username)

  const postings = useMemo(() => (data ? data.pages.flatMap(({ content }) => content) : []), [data])

  const fetchMore = () => {
    if (!inView) {
      return
    }
    void fetchNextPage()
  }

  useEffect(() => {
    fetchMore()
  }, [inView, hasNextPage])

  const handleScroll = () => {
    scrollPositionRef.current = window.scrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!postings) {
    return <div>등록된 콘텐츠가 없습니다.</div>
  }

  return (
    <div className="flex flex-col gap-5 pt-5 pb-5 justify-center items-center w-[600px]">
      {postings.map((posting) => (
        <Post key={posting.id} feed={posting} username={username} />
      ))}
      <div ref={ref}></div>
    </div>
  )
}

export default FeedList

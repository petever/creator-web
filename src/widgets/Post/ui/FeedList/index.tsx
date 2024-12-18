import React, { useEffect, useMemo } from 'react'
import { FeedResponse } from '@/entities/feeds/types'
import { useInView } from 'react-intersection-observer'
import useFeeds from '@/entities/feeds/hooks/useFeeds'
import { Post } from '@/widgets/Post/ui'
import { StickyNote } from 'lucide-react'

interface FeedListProps {
  initialFeeds: FeedResponse
  username?: string
  viewType?: 'row' | 'grid'
}

const FeedList = ({ initialFeeds, username, viewType = 'row' }: FeedListProps) => {
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

  const postListStyle =
    viewType === 'row'
      ? 'flex flex-col items-center w-full md:w-[640px] md:p-0 md:mt-0'
      : 'grid grid-cols-3 w-full'

  if (postings.length === 0) {
    return (
      <div className="flex flex-col pt-5 pb-5 justify-center items-center w-screen md:w-[640px]">
        <StickyNote />
        등록된 콘텐츠가 없습니다.
      </div>
    )
  }

  return (
    <div className={postListStyle}>
      {postings.map((posting) => (
        <Post key={posting.id} feed={posting} username={username} viewType={viewType} />
      ))}
      <div ref={ref}></div>
    </div>
  )
}

export default FeedList

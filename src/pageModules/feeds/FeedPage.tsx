'use client'

import React, {useState} from 'react'
import FeedList from '../../widgets/Post/ui/FeedList'
import {FeedContents, FeedResponse} from '@/entities/feeds/types'
import { UserProfile } from '@/entities/user/types'
import { BorderLayout } from '@/app/layouts/BorderLayout'
import { RecommendList } from '@/shared/RecommentList/ui/RecommendList'
import {Post} from "@/widgets";
import {FeedMedia} from "@/entities/feeds/ui/FeedMedia";
import {PostingHeader} from "@/widgets/Post/ui/PostingHeader";
import {FeedContent} from "@/entities/feeds/ui";
import {FeedButtons} from "@/features";
import {LkeList} from "@/shared/LikeList/ui";

interface FeedPageProps {
  initialFeed: FeedContents
}

const FeedDetail = ({ initialFeed }: FeedPageProps) => {
  const [feedOpened, setFeedOpened] = useState(false)
  const {owner, createdAt, contents, id, resources, likeCount} = initialFeed
  const handleDetailOpen = () => {
    setFeedOpened(true)
  }

  return (
    <div
      className="
      relative
      md:flex pt-0 md:pb-0 md:flex-row-reverse md:justify-end
    "
    >
      <BorderLayout>
        <PostingHeader profile={owner} createdAt={createdAt} />
        <FeedContent contents={contents} />
        <FeedMedia feedId={id} resources={resources}/>
        <FeedButtons feed={initialFeed} onDetailModal={handleDetailOpen} username={owner.username}/>
        <LkeList id={id} likeCount={likeCount} />
      </BorderLayout>
    </div>
  )
}

export default FeedDetail

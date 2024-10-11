import { PostItem } from '@/entities/posts/types'

export interface Feeds {
  contents: FeedContents[]
}

export interface FeedContents extends PostItem {
  creator: Creator
  id : string
  title : string
  contents : string
  isLiked: boolean
  isLikeCount : number
  isSubscribed: boolean
  commentCount: number
  createdAt: Date
  updatedAt: Date
  resources: Resource[]
}

interface Resource {
  id: string
  filePath: string
  type: string
  mimeType: string
  createdAt: Date
  updatedAt: Date
}

export interface Creator {
  id : string
  username : string
  displayName : string
  status : string
  picture : string
  cover : string
  role : string
}
import { Creator } from '@/entities/creator/types'
import { PostItem } from '@/entities/posts/types'

export interface Feeds {
  contents: FeedContents[]
}

export interface FeedContents extends PostItem {
  creator: Creator
  isLiked: boolean
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

import { PostItem } from '@/entities/posts/types'
import { Owner, Pagination, Sort } from '@/shared/types'

export interface FeedSearchParams {
  nextId?: string
  username?: string
  size: number
}

export interface Feeds {
  content: FeedContents[]
  pageable: Pagination
  first: boolean
  last: boolean
  size: number
  number: number
  sort: Sort
  numberOfElements: number
  empty: boolean
}

export interface FeedContents extends PostItem {
  owner: Owner
  id: string
  title: string
  contents: string
  isLiked: boolean
  isLikeCount: number
  postStatus: 'PUBLIC' | 'SUBSCRIBED' | 'PRIVATE' | 'BLOCK' | 'DELETED'
  commentCount: number
  createdAt: Date
  updatedAt: Date
  resources: Resource[]
}

export interface Resource {
  id: string
  filePath: string
  type: string
  mimeType: string
  createdAt: Date
  updatedAt: Date
}

export interface FeedResponse {
  content: FeedContents[]
  last: boolean
  number: number
}

export interface FeedPageData {
  pages: FeedResponse[]
  pageParam: FeedSearchParams[]
}

import { PostItem } from '@/entities/posts/types'

export interface FeedSearchParams {
  nextId?: string
  username?: string
  page: number
  size: number
}

interface Pagination {
  paged: boolean
  pageNumber: number
  pageSize: number
  offSet: number
  sort: Sort
  unpaged: boolean
}

interface Sort {
  sorted: boolean
  empty: boolean
  unsorted: boolean
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
  isSubscribed: boolean
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

export interface Owner {
  id: string
  username: string
  displayName: string
  status: string
  picture: string
  cover: string
  role: string
}

export interface FeedResponse {
  content : FeedContents[]
  last : boolean
  number : number
}

export interface FeedPageData {
  pages: FeedResponse[]
  pageParam: FeedSearchParams[]
}
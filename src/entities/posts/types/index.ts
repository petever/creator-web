import { Owner, Pagination, Sort } from '@/shared/types'
import { FeedContents } from '@/entities/feeds/types'

export interface PostItem {
  id: string
  title: string
  contents: string
  likeCount: number
}

export interface PostLikeWithMemberSearchParams {
  nextId?: string
}

export interface PostLikeContent {
  postLikeId: string
  user: Owner[]
}

export interface PostLikeWithMembersResponse {
  pageable: Pagination
  content: PostLikeContent[]
  first: boolean
  last: boolean
  size: number
  number: number
  sort: Sort
  numberOfElements: number
  empty: boolean
}

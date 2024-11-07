import {UserProfile} from "@/entities/user/types";
import {FeedContents} from "@/entities/feeds/types";

export interface CommentTypes {
  contents : string
  createdAt : string
  id : string
  likeCount : number
  owner : UserProfile
  postId : string
  updatedAt : string
}

export interface CommentSubmit {
  contents : string
}

export interface CommentSearchParams {
  nextId?: string
  page: number
  size: number
}

export interface CommentResponse {
  content : CommentTypes[]
  last : boolean
  number : number
}
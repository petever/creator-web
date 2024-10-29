import {UserProfile} from "@/entities/user/types";

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

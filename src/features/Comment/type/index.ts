import {UserProfile} from "@/entities/user/types";

export interface Comment {
  contents : string
  createdAt : string
  id : string
  likeCount : number
  owner : UserProfile
  postId : string
  updatedAt : string
}

import { API_URL } from '@/shared/constants/apiURL'
import { clientKy } from '@/shared/core/clientKy'
import {CreatePost} from "@/widgets/AddContentModal/types";

export const createPosts = async (payload: CreatePost) => {
  return clientKy.post(API_URL.POSTS, payload)
}

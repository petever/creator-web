import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const createPosts = async (payload: FormData) => {
  return httpKy
    .post(API_URL.POSTS, {
      body: payload,
    })
    .json()
}

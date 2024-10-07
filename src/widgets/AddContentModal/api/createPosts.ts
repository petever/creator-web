import { API_URL } from '@/shared/constants/apiURL'
import { clientKy } from '@/shared/core/clientKy'

export const createPosts = async (payload: FormData) => {
  return clientKy
    .post(API_URL.POSTS, {
      body : payload
  }).json()
}

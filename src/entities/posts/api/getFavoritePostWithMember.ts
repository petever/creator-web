import { API_URL } from '@/shared/constants/apiURL'
import { Feeds } from '@/entities/feeds/types'
import { PostLikeWithMemberSearchParams, PostLikeWithMembersResponse } from '@/entities/posts/types'

export const getFavoritePostWithMembers = async ({
  pageParam,
}: {
  pageParam: PostLikeWithMemberSearchParams
}): Promise<PostLikeWithMembersResponse> => {
  return await clientKy
    .get<Feeds>(API_URL.POSTS_LIKE_MEMBER, {
      searchParams: pageParam,
    })
    .json()
}

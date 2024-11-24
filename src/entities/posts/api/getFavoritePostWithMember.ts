import { API_URL } from '@/shared/constants/apiURL'
import { Feeds } from '@/entities/feeds/types'
import { PostLikeWithMemberSearchParams, PostLikeWithMembersResponse } from '@/entities/posts/types'
import { httpKy } from '@/shared/core/httpKy'

export const getFavoritePostWithMembers = async (
	postingId : string,
  pageParam : PostLikeWithMemberSearchParams,
): Promise<PostLikeWithMembersResponse> => {
  return await httpKy
    .get<Feeds>(API_URL.FEED_LIKE_MEMBERS(postingId), {
      searchParams: pageParam,
    })
    .json()
}

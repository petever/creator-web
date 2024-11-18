import { API_URL } from '@/shared/constants/apiURL'
import { FeedResponse, Feeds, FeedSearchParams } from '@/entities/feeds/types'
import { clientKy } from '@/shared/core/clientKy'
import { PostLikeWithMemberSearchParams, PostLikeWithMembersResponse } from '@/entities/posts/types'

export const getFavoritePostWithMembers = async ({
  pageParam,
}: {
  pageParam: PostLikeWithMemberSearchParams
}): Promise<PostLikeWithMembersResponse> => {
  const result = await clientKy
    .get<Feeds>(API_URL.POSTS_LIKE_MEMBER, {
      searchParams: pageParam,
    })
    .json()

  const { content, last } = result

  return {
    content,
    last,
  }
}

import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import {QUERY_KEY} from "@/shared/constants/queryKey";
import {getFavoritePostWithMembers} from "@/entities/posts/api/getFavoritePostWithMember";

const useFavoritePostWithMembers = (postingId: string) => {
	const params = {
		size: 10,
	}
  const queryClient = useQueryClient()
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.FEED_LIKE_MEMBERS, postingId],
    queryFn: ({pageParam = params}) => getFavoritePostWithMembers(postingId, params),
    initialData: {
      pages: [],
      pageParams: [params],
    },
    initialPageParam: params,
    getNextPageParam: (lastPage) => {
      const lastIndex = lastPage.content.length - 1
      if(lastPage.content.length < 10) return
      // const nextId = lastPage.content[lastIndex]?.id
      queryClient.getQueryData([QUERY_KEY.FEED_LIKE_MEMBERS, postingId])
      return {
        size: 10,
      }
    },
  })
}

export default useFavoritePostWithMembers

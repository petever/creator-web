import { httpKy } from '@/shared/core/httpKy'
import { API_URL } from '@/shared/constants/apiURL'

interface Params {
  size: number
  page: number
}

export const getSearchTrends = async ({ pageParam }: { pageParam: Params }) => {
  return await httpKy
    .get(API_URL.SEARCH_TRENDS, {
      searchParams: pageParam,
    })
    .json()
}

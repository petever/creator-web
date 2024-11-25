import { httpKy } from '@/shared/core/httpKy'
import { API_URL } from '@/shared/constants/apiURL'

interface Params {
  keyword: string
}

export const getSearch = async ({ pageParam }: { pageParam: Params }) => {
  return await httpKy
    .get(API_URL.SEARCH, {
      searchParams: pageParam,
    })
    .json()
}

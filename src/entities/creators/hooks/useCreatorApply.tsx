'use client'
import { useQuery } from '@tanstack/react-query'
import { getCreatorApply } from '@/entities/creators/api/getCreatorApply'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { ApplyForCreator } from '@/entities/creators/types/applyForCreator'

export const useCreatorApply = (initialData: ApplyForCreator) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.APPLY_CREATOR],
    queryFn: getCreatorApply,
    initialData,
  })
  return {
    data,
  }
}

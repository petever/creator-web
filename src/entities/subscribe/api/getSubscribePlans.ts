import { serverKy } from '@/shared/core/serverKy'
import { API_URL } from '@/shared/constants/apiURL'
import { clientKy } from '@/shared/core/clientKy'
import { getSession } from 'next-auth/react'

export const getSubscribePlans = async (userId?: string) => {
  return clientKy
    .get(API_URL.SUBSCRIBER_PLANS, {
      searchParams: {
        userId: userId,
      },
    })
    .json()
}

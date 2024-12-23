import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'
import {SubscribePlan} from "@/entities/subscribe/types";

export const getSubscribePlans = async (userId?: string)  : Promise<SubscribePlan[]> => {
  return httpKy
    .get(API_URL.SUBSCRIBER_PLANS, {
      searchParams: {
        userId: userId,
      },
    })
    .json()
}

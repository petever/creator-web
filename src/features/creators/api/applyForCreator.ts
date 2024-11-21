import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const applyForCreator = (sns: SNS[]) => {
  return httpKy.post(API_URL.CREATOR_APPLY, {
    json: sns,
  })
}

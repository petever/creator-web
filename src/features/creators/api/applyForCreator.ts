import { API_URL } from '@/shared/constants/apiURL'
import { clientKy } from '@/shared/core/clientKy'

export const applyForCreator = (sns: SNS[]) => {
  return clientKy.post(API_URL.CREATOR_APPLY, {
    json: sns,
  })
}

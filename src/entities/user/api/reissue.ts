import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const reissue = async (refreshToken: string) => {
  return await httpKy
    .post(API_URL.REISSUE, {
      json: refreshToken,
    })
    .json()
}

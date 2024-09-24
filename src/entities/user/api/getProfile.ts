import { apiService } from '@/shared/core/apiService'
import { API_URL } from '@/shared/constants/apiURL'

export const getProfile = async () => {
  return apiService.get(API_URL.USERS_PROFILE).json()
}

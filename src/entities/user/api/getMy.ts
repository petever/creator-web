import { apiService } from '@/shared/core/apiService'
import { API_URL } from '@/shared/constants/apiURL'

export const getMy = async () => {
  return apiService.get(API_URL.USERS_MY).json()
}

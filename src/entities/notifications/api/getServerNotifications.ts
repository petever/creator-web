import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const getServerNotifications = async () => {
  return httpKy.get(API_URL.NOTIFICATIONS).json()
}

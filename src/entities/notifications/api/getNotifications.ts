import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'

export const getNotifications = async () => {
  return httpKy.get(API_URL.NOTIFICATIONS).json()
}

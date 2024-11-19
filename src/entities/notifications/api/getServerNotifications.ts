import { API_URL } from '@/shared/constants/apiURL'
import { serverKy } from '@/shared/core/serverKy'

export const getServerNotifications = async () => {
  return serverKy.get(API_URL.NOTIFICATIONS).json()
}

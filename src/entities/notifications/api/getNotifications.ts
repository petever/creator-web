import { API_URL } from '@/shared/constants/apiURL'
import { clientKy } from '@/shared/core/clientKy'

export const getNotifications = async () => {
  return clientKy.get(API_URL.NOTIFICATIONS).json()
}

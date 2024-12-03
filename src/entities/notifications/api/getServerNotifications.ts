import { API_URL } from '@/shared/constants/apiURL'
import { httpKy } from '@/shared/core/httpKy'
import { Notification } from '@/entities/notifications/types'

export const getServerNotifications = async (): Promise<Notification[]> => {
  return httpKy.get(API_URL.NOTIFICATIONS).json()
}

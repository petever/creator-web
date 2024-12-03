import { useQuery } from '@tanstack/react-query'
import { getNotifications } from '@/entities/notifications/api/getNotifications'
import { QUERY_KEY } from '@/shared/constants/queryKey'
import { Notification } from '@/entities/notifications/types' // Notification 타입을 임포트했는지 확인하세요.

export const useNotifications = (initialData?: Notification[]) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.NOTIFICATIONS],
    queryFn: getNotifications,
    initialData,
  })

  return { data }
}

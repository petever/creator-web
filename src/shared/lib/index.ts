import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('ko')
dayjs.tz.setDefault('Asia/Seoul')
dayjs.extend(relativeTime)

export const getDateFormat = (day: Date) => {
  const now = dayjs()
  const inputDate = dayjs(day)
  const diffInDays = now.diff(inputDate, 'day')
  const diffInHours = now.diff(inputDate, 'hour')

  if (diffInDays >= 30) {
    return `${Math.floor(diffInDays / 30)}개월`
  }

  if (diffInDays >= 7) {
    return `${Math.floor(diffInDays / 7)}주`
  }

  if (diffInDays >= 1) {
    return `${diffInDays}일`
  }

  if (diffInHours >= 1) {
    return `${diffInHours}시간`
  }

  return '1시간'
}

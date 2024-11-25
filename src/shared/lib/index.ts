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
  const diffInDays = now.diff(inputDate, 'day') // 날짜 차이 계산

  if (diffInDays < 7) {
    return `${diffInDays}일`
  }
  if (diffInDays < 30) {
    const diffInWeeks = Math.floor(diffInDays / 7)
    return `${diffInWeeks}주`
  }
  return `${Math.floor(diffInDays / 30)}개월`
}

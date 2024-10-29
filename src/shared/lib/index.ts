import dayjs from "dayjs";
import 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('ko')
dayjs.tz.setDefault('Asia/Seoul');

export const getDateFormat = (day : Date) => {
  const today = dayjs().tz().format('YYYY-MM-DD')
  const isToday = today === dayjs(day).tz().format('YYYY-MM-DD')

  if(isToday) {
    return dayjs(day).tz().format('hh:mm:ss')
  }
  return dayjs(day).tz().format('YYYY-MM-DD hh:mm:ss')
}

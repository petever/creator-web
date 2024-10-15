import dayjs from "dayjs";
import 'dayjs/locale/ko'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('ko')
dayjs.tz.setDefault('Asia/Seoul');

export const getDateFormat = (day : Date) => {
  return dayjs(day).tz().format('YYYY-MM-DD hh:mm:ss')
}

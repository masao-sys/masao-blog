import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

export const formatCommon =
  (format: string) =>
  (date: string | Date | number): string => {
    return dayjs.utc(date).tz('Asia/Tokyo').format(format) as string;
  }

export const formatDate = formatCommon('YYYY年MM月DD日')

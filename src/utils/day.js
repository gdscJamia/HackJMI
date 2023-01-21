import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat'
import Timezone from 'dayjs/plugin/timezone'

dayjs.extend(localizedFormat)
dayjs.extend(Timezone)
dayjs.tz.setDefault("Asia/Calcutta")
export default dayjs
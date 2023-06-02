import moment from "moment";
import 'moment/locale/ru';

export const calcDateByOffset = offset => {
    const currentDate = new Date();
    const utc = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
    const localTime = new Date(utc + (3600000 * offset));
    return moment(localTime).locale('ru')
    
}
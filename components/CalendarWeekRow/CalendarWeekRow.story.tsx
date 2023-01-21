import { CalendarWeekRow } from './CalendarWeekRow';

export default {
  title: 'CalendarWeekRow',
};

export const Usage = () => (
  <CalendarWeekRow
    date={new Date()}
    onClick={(selectedDate) =>
      console.log(`clicked service ${selectedDate.toDateString()}`, selectedDate)
    }
  />
);

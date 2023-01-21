import { CalendarDay } from './CalendarDay';

export default {
  title: 'CalendarDay',
};

export const Usage = () => (
  <CalendarDay
    date={new Date()}
    onClick={(selectedDate) =>
      console.log(`clicked service ${selectedDate.toDateString()}`, selectedDate)
    }
  />
);
export const Selected = () => (
  <CalendarDay
    selected
    date={new Date()}
    onClick={(selectedDate) =>
      console.log(`clicked service ${selectedDate.toDateString()}`, selectedDate)
    }
  />
);

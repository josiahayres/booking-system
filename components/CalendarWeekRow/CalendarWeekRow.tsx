import { Button, Divider, Group } from '@mantine/core';
import React, { useState } from 'react';
import dayjs from 'dayjs';

import useStyles from './CalendarWeekRow.styles';
import { CalendarDay } from '../CalendarDay/CalendarDay';

type Props = {
  date: Date;
  onClick: (selectedDate: Date) => void;
  daysToShow?: number;
};

type HookProps = {
  startDate: Date;
  numberOfDays: number;
};

const useUpcomingDates = ({ startDate, numberOfDays }: HookProps) =>
  Array.from({ length: numberOfDays }, (_, i) => dayjs(startDate).add(i, 'day').toDate());

// When true, selecting next days will show fixed number of days
// Otherwise, will add days onto view
const USE_FIXED_DAYS = false;

export const CalendarWeekRow = ({ date, onClick, daysToShow = 5 }: Props) => {
  const { classes } = useStyles();

  const [calendarOffsetDate, setCalendarOffsetDate] = useState(date);
  const [numberOfDays, setNumberOfDays] = useState(daysToShow);

  const upcomingDates = useUpcomingDates({
    startDate: calendarOffsetDate,
    numberOfDays,
  });

  const handleSelectNextDays = () => {
    const nextOffset = dayjs(calendarOffsetDate).add(daysToShow, 'days').toDate();
    if (USE_FIXED_DAYS) {
      setCalendarOffsetDate(nextOffset);
    } else {
      setNumberOfDays((days) => days + daysToShow);
    }
  };

  const handleSelectPreviousDays = () => {
    const previousOffset = dayjs(calendarOffsetDate).subtract(daysToShow, 'days').toDate();
    if (USE_FIXED_DAYS) {
      setCalendarOffsetDate(previousOffset);
    } else {
      setNumberOfDays((days) => days - daysToShow);
    }
  };

  return (
    <Group noWrap className={classes.root} spacing="xs">
      {upcomingDates.map((eachDate, index) => {
        const showPrevious = index === 0 && dayjs(calendarOffsetDate).isAfter(dayjs(date));
        return (
          <>
            {showPrevious && (
              <>
                <Button onClick={handleSelectPreviousDays}>Previous</Button>
                <Divider orientation="vertical" />
              </>
            )}
            <CalendarDay date={eachDate} onClick={onClick} />
            {index + 1 < upcomingDates.length ? (
              <Divider orientation="vertical" />
            ) : (
              <>
                <Divider orientation="vertical" />
                <Button onClick={handleSelectNextDays}>Next</Button>
              </>
            )}
          </>
        );
      })}
    </Group>
  );
};

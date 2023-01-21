import { Button, Stack, Text } from '@mantine/core';
import React from 'react';
import dayjs from 'dayjs';

import advancedFormat from 'dayjs/plugin/advancedFormat';
import useStyles from './CalendarDay.styles';

dayjs.extend(advancedFormat);

type Props = {
  date: Date;
  selected?: boolean;
  onClick: (selectedDate: Date) => void;
};

export const CalendarDay = ({ date, selected = false, onClick }: Props) => {
  const dateParsed = dayjs(date);

  const day = dateParsed.format('ddd').toUpperCase();
  const dateFriendly = dateParsed.format('Do');
  const monthShort = dateParsed.format('MMM').toUpperCase();

  const { classes, cx } = useStyles({ selected });

  return (
    <Button className={cx(classes.button)} unstyled onClick={() => onClick(date)}>
      <Stack spacing="xs">
        <Text size="sm" className={classes.day}>
          {day}
        </Text>
        <Text className={classes.date}>{dateFriendly}</Text>
        <Text size="sm" className={classes.day}>
          {monthShort}
        </Text>
      </Stack>
    </Button>
  );
};

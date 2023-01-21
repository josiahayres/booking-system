import { createStyles } from '@mantine/core';

type CalendarDayProps = {
  selected: boolean;
};
export default createStyles((theme, { selected }: CalendarDayProps) => {
  const responsiveBg = theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white;
  const responsiveText = theme.colorScheme === 'dark' ? theme.white : theme.colors.dark;
  return {
    button: {
      padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,
      border: 'none',
      cursor: 'pointer',
      backgroundColor: responsiveBg,
    },
    day: {
      color: selected ? theme.primaryColor : theme.colors.gray[6],
    },
    date: {
      color: selected ? theme.white : responsiveText,
      background: selected ? theme.primaryColor : '',
      aspectRatio: '1 / 1',
      width: 50,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
});

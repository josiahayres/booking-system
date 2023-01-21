import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  box: {
    padding: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
    borderRadius: theme.radius.sm,
    [theme.fn.smallerThan('md')]: {
      padding: theme.spacing.xs,
    },
  },
  title: {
    fontWeight: 500,
    // color: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },
}));

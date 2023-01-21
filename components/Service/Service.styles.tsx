import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    display: 'block',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
  },
  card: {
    border: '2px solid  transparent',
    transition:
      'box-shadow 150ms ease, transform 100ms ease, border-radius 100ms ease, border 50ms ease',
    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      // transform: 'scale(1.02)',
      border: `2px solid ${theme.primaryColor}`,
    },
  },
  button: {
    padding: 0,
    width: '-webkit-fill-available',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
  },
}));

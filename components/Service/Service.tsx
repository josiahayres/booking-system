import {
  DefaultProps,
  Selectors,
  Box,
  Avatar,
  Button,
  Flex,
  Group,
  Paper,
  PaperProps,
  Stack,
  Text,
  Title,
  ButtonProps,
} from '@mantine/core';

import useStyles from './Service.styles';

export type Service = {
  id: number;
  title: string;
  cost: number;
  duration: number;
  category: string;
};

// This type will contain a union with all selectors defined in useStyles,
// in this case it will be `'root' | 'title' | 'description'`
type ServiceStylesNames = Selectors<typeof useStyles>;

// DefaultProps adds system props support (margin, padding, sx, unstyled, styles and classNames).
// It accepts 2 types: styles names and styles params, both of them are optional
interface ServiceProps extends DefaultProps<ServiceStylesNames> {
  service: Service;
  paperProps?: PaperProps;
  buttonProps?: ButtonProps;
  onClick: (service: Service) => void;
}

export function Service({
  service,
  paperProps,
  buttonProps,
  classNames,
  styles,
  unstyled,
  className,
  onClick,
  ...others
}: ServiceProps) {
  const { classes, cx } = useStyles(
    // First argument of useStyles is styles params
    undefined,
    // Second argument is responsible for styles api integration
    { name: 'Service', classNames, styles, unstyled }
  );

  const formatter = new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'NZD',
  });
  return (
    <Box unstyled className={cx(classes.root, className)} {...others}>
      <Button
        unstyled
        onClick={() => onClick(service)}
        {...buttonProps}
        className={cx(classes.button, buttonProps?.className)}
      >
        <Paper className={classes.card} shadow="sm" p="sm" {...paperProps}>
          <Flex mih={50} gap="md" justify="flex-start" align="center" direction="row" wrap="wrap">
            <Avatar size="lg" title={service.title} />
            <Stack spacing={0}>
              <Title order={4}>{service.title}</Title>
              <Group>
                <Text size="sm">{formatter.format(service.cost)}</Text>
                <Text size="sm">{`${service.duration} minutes`}</Text>
              </Group>
            </Stack>
          </Flex>
        </Paper>
      </Button>
    </Box>
  );
}

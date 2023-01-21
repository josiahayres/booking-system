import { Box, Stack, Title } from '@mantine/core';
import { Service } from '../Service/Service';
import useStyles from './Services.styles';

type ServicesProps = {
  services: Service[];
};

const useServicesHelper = (services: Service[]) => {
  const allCategories = services.map(({ category }) => category);

  const categories = Array.from(new Set(allCategories));

  const servicesForCategories = categories.map((eachCategory) => ({
    category: eachCategory,
    services: services.filter((eachService) => eachService.category === eachCategory),
  }));
  return { categories, servicesForCategories };
};

export function Services({ services }: ServicesProps) {
  const { classes } = useStyles();
  const { servicesForCategories } = useServicesHelper(services);

  const handleServiceClick = (service: Service) => {
    console.log(service.id);
  };

  return (
    <Stack p="md">
      {servicesForCategories.map(({ category, services: servicesForCategory }) => (
        <Box className={classes.box}>
          <Stack spacing="sm">
            <Title order={3} className={classes.title}>
              {category}
            </Title>
            {servicesForCategory.map((eachService) => (
              <Service service={eachService} onClick={handleServiceClick} />
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}

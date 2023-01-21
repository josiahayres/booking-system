import { Service } from './Service';

export default {
  title: 'Service',
};

const service = { cost: 1000, duration: 30, id: 1, title: 'Haircut', category: 'MENS' };

export const Usage = () => (
  <Service
    service={service}
    onClick={(selectedService) =>
      console.log(`clicked service ${selectedService.id}`, selectedService)
    }
  />
);

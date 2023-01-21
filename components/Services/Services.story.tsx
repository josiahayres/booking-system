import { Services } from './Services';

export default {
  title: 'Services',
};

const services = [
  { cost: 30, duration: 30, id: 1, title: 'Kids Haircut', category: 'KIDS' },
  { cost: 35, duration: 45, id: 2, title: 'Student Haircut', category: 'STUDENT' },
  { cost: 40, duration: 60, id: 3, title: 'Zero / Skin Fade Student Haircut', category: 'STUDENT' },
  { cost: 45, duration: 50, id: 4, title: 'Haircut w/ Beard Trim', category: 'MENS' },
  { cost: 10, duration: 10, id: 5, title: 'Hair Wash Massage', category: 'EXTRA' },
];

export const Usage = () => <Services services={services} />;

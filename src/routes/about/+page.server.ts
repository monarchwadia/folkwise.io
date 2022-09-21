import { getAllStaff } from '../../services/staffDAO';
import type { PageServerLoad } from './$types';

// the endpoint
export const load: PageServerLoad = () => {
  const staff = getAllStaff();

  console.log('About page server');

  return { staff };
};

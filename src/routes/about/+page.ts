import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {

  if (data) {
    return {
      staff: data.staff
    };
  } else {
    throw error(404);
  }
};

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {

  if (data) {
    return { posts: data.posts, staff: data.staff };
  } else {
    throw error(404);
  }
};

import { getPosts } from '../../services/posts';
import { getAllStaff } from '../../services/staffDAO';
import { generatePreviewsForAllPosts } from '../../services/preview';
import type { PageServerLoad } from './$types';

// the endpoint
export const load: PageServerLoad = () => {
  if (process.env.NODE_ENV !== 'production') {
    generatePreviewsForAllPosts();
  }

  const posts = getPosts();
  const staff = getAllStaff();

  console.log(`Blog page server`);

  return { posts, staff };
};

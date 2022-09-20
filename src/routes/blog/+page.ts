import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
// import type { Post as PostType, StaffMember as StaffType } from 'src/types';

export const load: PageLoad = async ({ fetch }) => {
  // todo: error catching
  const [postsResponse, staffResponse] = await Promise.all([
    fetch('/api/posts'),
    fetch('/api/allStaffController')
  ]);

  if (postsResponse.ok && staffResponse.ok) {
    const posts = await postsResponse.json();
    const staff = await staffResponse.json();

    return {
  posts: posts,
  staff: staff
};
  } else {
    throw error(404);
  }
};

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { StaffMember as StaffType } from 'src/types';

// Double fetch structure from here: https://scottspence.com/posts/fetch-data-from-two-or-more-endpoints-in-svelte
// Note: this did not work when destructuring the response.json() variables
export const load: PageLoad = async ({ fetch, params }) => {
  // todo: error catching
  const { postId } = params;
  const [postResponse, staffResponse] = await Promise.all([
    fetch('/api/posts/' + postId),
    fetch('/api/allStaffController')
  ]);

  if (postResponse.ok && staffResponse.ok) {
    const post = await postResponse.json();
    const staff = await staffResponse.json();
    const staffMember = staff.find((s: StaffType) => s.username === post.username);

    return {
      post,
      staffMember
    };
  } else {
    throw error(404);
  }
};

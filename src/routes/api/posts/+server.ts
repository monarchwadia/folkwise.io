// throw new Error(
//   /*HELP*/ '@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)'
// );

import type { RequestHandler } from './$types';
import { getPosts } from '../../../services/posts';

// the endpoint
export const GET: RequestHandler = async () => {
  const posts = getPosts();

  return new Response(JSON.stringify(posts), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

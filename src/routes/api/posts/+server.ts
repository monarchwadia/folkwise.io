throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

import type { RequestHandler } from '@sveltejs/kit';
import { getPosts } from '../../../services/posts';

// the endpoint
export const get: RequestHandler = async () => {
  const posts = getPosts();

  return {
    status: 200,
    body: posts
  };
};

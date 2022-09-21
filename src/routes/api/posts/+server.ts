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

import type { RequestHandler } from './$types';
import { getPostbyId } from '../../../../services/posts';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
  const { id } = params;

  const post = getPostbyId(id);

  if (post) {
    return new Response(JSON.stringify(post), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else {
    throw error(404);
  }
};

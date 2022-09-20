throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

import type { RequestHandler } from '@sveltejs/kit';
import { getPostbyId } from 'src/services/posts';

export const get: RequestHandler = async ({ params }) => {
  const { id } = params;

  const post = await getPostbyId(id);

  if (post) {
    return {
      body: post
    };
  } else {
    return {
      status: 404
    };
  }
};

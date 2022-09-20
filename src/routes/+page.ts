import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
// import type { Post as PostType } from 'src/types';
// import Podcast from 'src/components/podcast.svelte';

export const load: PageLoad = async ({ fetch }) => {
  // todo: error catching
  const response = await fetch('/api/posts');

  if (response.ok) {
    const posts = await response.json();
    return {
      posts
    };
  } else {
    throw error(404);
  }
};

import { error } from '@sveltejs/kit';
import type { PageLoad } from '@sveltejs/kit';
import type { Post as PostType } from 'src/types';
import Podcast from 'src/components/podcast.svelte';

export const load: PageLoad = async ({ fetch }) => {
  // todo: error catching
  const response = await fetch('/api/posts');

  if (response.ok) {
    const json = await response.json();
    return {
  posts: json
};
  } else {
    throw error(404);
  }
};

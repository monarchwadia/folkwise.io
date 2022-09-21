import { getPosts } from 'src/services/posts';
import { generatePreviewsForAllPosts } from 'src/services/preview';

// the endpoint
export async function get() {
  if (process.env.NODE_ENV !== 'production') {
    generatePreviewsForAllPosts();
  }

  const posts = getPosts();

  return { posts };
}

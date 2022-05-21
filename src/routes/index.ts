import { getPosts } from '../services/posts';
import { generatePreviewsForAllPosts } from '../services/preview';

// the endpoint
export async function get() {
  if (process.env.NODE_ENV !== 'production') {
    generatePreviewsForAllPosts();
  }

  const posts = getPosts();

  return {
    status: 200,
    body: {
      posts
    }
  };
}

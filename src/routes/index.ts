
import { getPosts } from "../services/posts";
import { generatePreviewsForAllPosts } from "../services/preview";

// the endpoint
export async function get() {
  generatePreviewsForAllPosts();

  const posts = getPosts();

  return {
    status: 200,
    body: {
      posts
    }
  };
}
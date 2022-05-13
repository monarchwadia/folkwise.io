
import { getPosts } from "../services/posts";

// the endpoint
export async function get() {
  // TODO: Hacky way of generating previews.
  // This should probably be in a pre-push eventually.
  if (typeof window === "undefined") {
    const {generatePreviewsForAllPosts} = await import("../services/preview");
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
import { getPosts } from "../../../services/posts";

// the endpoint
export async function get() {
  const posts = getPosts();

  return {
    status: 200,
    body: posts
  };
}
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { getPosts } from "../posts";
import { createPostPreview } from "./create-post-preview";

// creates social media previews
export const generatePreviewsForAllPosts = async () =>  {
  const posts = getPosts();

  const postPromises = await Promise.allSettled(posts.map((post => createPostPreview(post, {
      width: 200,
      height: 100
    })
  )));

  postPromises.forEach((post) => {
    switch(post.status) {
      case "fulfilled":
        break;
      case "rejected":
        console.error(post.reason)
        break;
    }
  })
}


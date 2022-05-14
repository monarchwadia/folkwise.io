import { getPosts } from "../posts";
import { createPostPreview } from "./create-post-preview";
import metatagGenerators from "./metatag-generators";

// creates social media previews
export const generatePreviewsForAllPosts = async () =>  {
  const posts = getPosts();

  const postPromises = await Promise.allSettled(metatagGenerators.flatMap(generator => {
    return posts.flatMap(post => {
      return createPostPreview(post, generator);
    })
  }));

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

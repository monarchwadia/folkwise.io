import type { Post } from "src/types";

type Metadata = {
  "og:title": string;
  "og:type": string;
  "og:image": string;
  "og:url": string;
}

export const createHtmlMetadata = (post: Post): Metadata => {
  return {
    "og:title": post.title,
    "og:image": "https://monarchwadia.com/socialpreviews/" + post.id + ".png",
    "og:type": "article",
    "og:url": "https://monarchwadia.com/posts/" + post.id
  }
}
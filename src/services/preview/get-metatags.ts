import type { Post } from "src/types";
import type { Metatag } from "./types";

export const getMetatags = (post: Post): Metatag[] => {
  return [
    ["og:title", post.title],
    ["og:image", "https://monarchwadia.com/socialpreviews/" + post.id + ".png"],
    ["og:type", "article"],
    ["og:url", "https://monarchwadia.com/posts/" + post.id]
  ]
}
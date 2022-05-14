import type { Post } from "src/types";
import { absoluteUrl } from "src/utils";
import type { Metatag, MetatagGenerator } from "../types";

const twitterMetatags: MetatagGenerator = {
  pathPrefix: "twitter",
  imageDimensions: {
    height: 650,
    width: 1300
  },
  metatags: (post: Post): Metatag[] => [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@monarchwadia" },
    { name: "twitter:title", content: post.title },
    { name: "twitter:description", content: post.excerpt },
    { name: "twitter:image", content: absoluteUrl("socialpreviews", "twitter", post.id) + ".png" },
    { name: "twitter:image:alt", content: `A caption that says "${post.title}"` }
  ]
}

export default twitterMetatags;

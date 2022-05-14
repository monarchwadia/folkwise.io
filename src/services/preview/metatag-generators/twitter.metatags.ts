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
    { property: "twitter:creator", content: "@monarchwadia" },
    { property: "twitter:title", content: post.title },
    { property: "twitter:description", content: post.excerpt },
    { property: "twitter:image", content: absoluteUrl("socialpreviews", "twitter", post.id) + ".png" },
    { property: "twitter:image:alt", content: `A caption that says "${post.title}"` }
  ]
}

export default twitterMetatags;

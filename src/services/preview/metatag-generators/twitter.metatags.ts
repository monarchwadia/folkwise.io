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
    { type: "name", key: "twitter:card", content: "summary_large_image" },
    { type: "property", key: "twitter:creator", content: "@monarchwadia" },
    { type: "property", key: "twitter:title", content: post.title },
    { type: "property", key: "twitter:description", content: post.excerpt },
    { type: "property", key: "twitter:image", content: absoluteUrl("socialpreviews", "twitter", post.id) + ".png" },
    { type: "property", key: "og:image:height", content: "650"},
    { type: "property", key: "og:image:width", content: "1300"},
    { type: "property", key: "twitter:image:alt", content: `A caption that says "${post.title}"` },
  ]
}

export default twitterMetatags;

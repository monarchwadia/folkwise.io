import type { Post } from "src/types";
import { absoluteUrl } from "src/utils";
import type { Metatag, MetatagGenerator } from "../types";

const generalMetatags: MetatagGenerator = {
  pathPrefix: "general",
  imageDimensions: {
    height: 630,
    width: 1200
  },
  metatags: (post: Post): Metatag[] => [
    { type: "name", key: "title", content: post.title  },
    { type: "name", key: "description", content: post.excerpt  },
    { type: "name", key: "author", content: "Monarch Wadia"  },
    { type: "property", key: "og:title", content: post.title },
    { type: "property", key: "og:type", content: "article" },
    { type: "property", key: "og:url", content: absoluteUrl(post.slug) },
    { type: "property", key: "og:description", content: post.excerpt },
    { type: "property", key: "og:image", content: absoluteUrl("socialpreviews", "general", post.id) + ".png" },
    { type: "property", key: "og:image:height", content: "630"},
    { type: "property", key: "og:image:width", content: "1200"},
  ]
}

export default generalMetatags;

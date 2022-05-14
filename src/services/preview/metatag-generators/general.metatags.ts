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
    { name: "title", content: post.title  },
    { name: "description", content: post.excerpt  },
    { name: "author", content: "Monarch Wadia"  },
    { property: "og:title", content: post.title },
    { property: "og:type", content: "article" },
    { property: "og:url", content: absoluteUrl(post.slug) },
    { property: "og:image", content: absoluteUrl("socialpreviews", "general", post.id) + ".png" },
    { property: "og:description", content: post.excerpt },
  ]
}

export default generalMetatags;

import { basename, dirname } from "path";

export type Post = {
  slug: string;
  html: string;
  title: string;
  excerpt: string;
  isPublished: boolean;
  publishedOn: string;
  updatedOn: string;
};

const getPosts = () => {
  const modules = import.meta.globEager("./*.md");
  
  const posts: Post[] = Object.entries(modules).map(([filepath, module]) => {
    const slug = basename(dirname(filepath));
    const { metadata } = module;
    const { html } = module.default.render();

    return {
      slug,
      html,
      ...metadata,
    };
  });

  return posts;
}



// the endpoint
export async function get() {
  const posts = getPosts();

  return {
    status: 200,
    body: posts
  };
}
import type { Handle, RequestHandler } from "@sveltejs/kit";
import type { RouteDefinition } from "@sveltejs/kit/types/private";
import { getPostbyId } from "src/services/posts";

export const get: RequestHandler = async ({ params }) => {
  const { id } = params ;

  const post = await getPostbyId(id);

  if (post) {
    return {
      body: post
    }
  } else {
    return {
      status: 404
    }
  }
}
import { getPostbyId } from "../../../services/posts";

export const get = async ({ params }) => {
  const { id } = params ;

  const post = getPostbyId(id);

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
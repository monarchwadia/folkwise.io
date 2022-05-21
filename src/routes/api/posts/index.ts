import type { RequestHandler } from '@sveltejs/kit';
import { getPosts } from '../../../services/posts';

// the endpoint
export const get: RequestHandler = async () => {
	const posts = getPosts();

	return {
		status: 200,
		body: posts
	};
};

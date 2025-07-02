import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { getAllPosts } from '$lib/utils';
import type { PostData } from '$lib/types/post';

export const GET: RequestHandler = async () => {
	try {
		const posts: PostData[] = await getAllPosts();
		return json(posts);
	} catch (err) {
		console.error('Failed to fetch allPosts:', err);
		return json(
			{ error: 'Failed to fetch allPosts' },
			{ status: 500 }
		);
	}
};
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { getLatestPost } from '$lib/utils';
import type { PostData } from '$lib/types/post';

export const GET: RequestHandler = async () => {
	try {
		const latestPost: PostData | null = await getLatestPost()
		return json(latestPost)
	} catch (err) {
		console.error('Failed to fetch latestPost:', err);
		return json(
			{ error: 'Failed to fetch latest post' },
			{ status: 500 }
		);
	}
}
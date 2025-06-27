import type { PageLoad } from './$types';
import type { PostData } from '$lib/types/post';

export const load: PageLoad = async ({ fetch }) => {
	try {
		const response = await fetch('/api/latestPost');

		if (!response.ok) {
			throw new Error(`Failed to fetch latest post: ${response.status}`);
		}

		const post: PostData = await response.json();
		return { post };

	} catch (error) {
		console.error('Error fetching latest post:', error);
		return {
			post: null,
			error: error instanceof Error ? error.message : 'Unknown error'
		};
	}
};
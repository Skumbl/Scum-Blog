import type { PageLoad } from './$types';
import type { PostData } from '$lib/types/post';

export const load:PageLoad = async ({ fetch }) => {
	try {
		const response = await fetch('/api/allPosts');

		if (!response.ok) {
			throw new Error(`Failed to fetch post ${response.status}`);
		}

		const posts: PostData[]  = await response.json();

		return { posts };
	} catch (error) {
		console.error('Error fetching posts:', error);
		return {
			// return no posts so I don't break the page
			posts: [] as PostData[],
			error: 'Failed to load posts'
		};
	}
}
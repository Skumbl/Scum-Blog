import type { PageLoad } from './$types';
import type { PostData } from '$lib/types/post';

export const load:PageLoad = async ({ params, fetch }) => {
	const { category } = params;
	try {
		const response: Response = await fetch(`/api/postsByCategory/${category}`);

		if (!response.ok) {
			throw new Error(`Failed to fetch posts ${response.status}`);
		}

		const posts: PostData[] = await response.json();

		return { posts, category};

	} catch (error) {
		console.error('Error fetching posts from cate', error)
		return {
			posts: [] as PostData[],
			category: category,
			error: 'Failed to fetch posts from category',
		};
	}
}
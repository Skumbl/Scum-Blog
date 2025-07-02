import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { getPostsByCategory } from '$lib/utils';
import type { PostData } from '$lib/types/post';

export const GET: RequestHandler = async ({ params }) => {
	const category: string | undefined = params.category; // Extract the category property
	try {
		if (!category) {
			return json(
				{ error: 'Category parameter is required' },
				{ status: 400 }
			);
		}
		const posts: PostData[] = await getPostsByCategory(category);
		return json(posts);
	} catch (err) {
		console.error(`Failed to fetch posts by category: ${category}`, err);
		return json(
			{ error: 'Failed to fetch posts by category' },
			{ status: 500 }
		);
	}
};
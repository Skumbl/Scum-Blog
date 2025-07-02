import type { MarkdownModule, PostData } from '$lib/types/post';

// private function to get all posts
async function fetchAllPosts(): Promise<PostData[]> {
	const modules = import.meta.glob<MarkdownModule>(
		'$lib/assets/posts/*.md',
		{ eager: true }
	);

	const posts: PostData[] = [];

	for (const [path, module] of Object.entries(modules)) {
		const fileName = path.split('/').pop()?.replace('.md', '') ?? '';
		posts.push({
			slug: fileName,
			...module.metadata,
			Content: module.default
		});
	}
	return posts;
}

export async function getAllPosts(): Promise<PostData[]> {
	const posts: PostData[] = await fetchAllPosts();

	return posts.sort(
		(a: PostData, b: PostData): number =>
			new Date(b.date).getTime() - new Date(a.date).getTime()
	);
}

export async function getLatestPost(): Promise<PostData | null> {
	const posts: PostData[] = await fetchAllPosts();

	if (posts.length === 0) {
		return null;
	}

	return posts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	)[0];
}

export async function getPostsByCategory(category: string): Promise<PostData[]> {
	const allPosts: PostData[] = await fetchAllPosts();

	const filteredPosts: PostData[] = allPosts.filter((post: PostData) =>
		post?.categories?.includes(category)
	);
	return filteredPosts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
}
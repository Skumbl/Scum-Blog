import type { MarkdownModule, PostData } from '$lib/types/post';

export async function getAllPosts(): Promise<PostData[]> {
	const modules = import.meta.glob<MarkdownModule>(
		'$lib/assets/posts/*.md',
		{ eager: true }
	);

	const posts: PostData[] = [];

	for (const [path, module] of Object.entries(modules)) {
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';

		posts.push({
			postId: slug,
			...module.metadata,
			Content: module.default
		});
	}

	return posts.sort(
		(a: PostData,b: PostData): number  => new Date(b.date).getTime() - new Date(a.date).getTime()
	)
}
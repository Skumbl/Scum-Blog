import type { MarkdownModule, PostData } from '$lib/types/post';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const slug = params.slug;
		const postModule: MarkdownModule = await import(`$lib/assets/posts/${slug}.md`);
		const { metadata, default: Content } = postModule;
		const post: PostData = {
			slug,
			...metadata,
			Content,
		};

		const headerImage = metadata.image ? `/images/headerImages/${slug}.webp` : null;

		return {
			post,
			headerImage
		};
	} catch (err) {
		throw error(404, `Post: ${params.slug} not found :o`);
	}
};
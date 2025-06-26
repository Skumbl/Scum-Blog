import type { MarkdownModule } from '$lib/types/post';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const slug = params.slug;
		const postModule: MarkdownModule = await import(`$lib/assets/posts/${slug}.md`);
		const { metadata, default: Content } = postModule;

		//PostData
		return {
			slug,
			...metadata,
			Content,
		};
	} catch (err) {
		throw error(404, `Post: ${params.slug} not found :(`);
	}
};
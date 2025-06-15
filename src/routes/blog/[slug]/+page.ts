import type { MarkdownModule } from '$lib/types/post';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const postModule: MarkdownModule = await import(`$lib/assets/posts/${params.slug}.md`);
		const { metadata, default: Content } = postModule;

		//PostData
		return {
			...metadata,
			Content,
		};
	} catch (err) {
		throw error(404, `Post: ${params.slug} not found :(`);
	}
};
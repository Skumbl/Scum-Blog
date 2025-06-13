import type { PageLoad } from './$types'
import type { Component } from 'svelte'
import type { PostData } from '$lib/types/post';
import { error } from '@sveltejs/kit';

export const load: PageLoad<PostData> = async ({ params }) => {
	try {
		const postModule = await import(`$lib/placeholderDB/${params.slug}.md`)
		const { metadata, default: Content } = postModule as {
			metadata: Omit<PostData, 'Content'>
			default: Component
		}

		return {
			...metadata,
			Content
		}
	} catch (err) {
		throw error(404, `Post: ${params.slug} not found :(`)
	}

}
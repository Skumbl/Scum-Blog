import { env } from '$env/dynamic/public';

export interface Comment {
	id: number;
	name: string;
	body: string;
	created_at: string;
}

const COLUMNS = 'id,name,body,created_at';

export const commentsEnabled = Boolean(env.PUBLIC_SUPABASE_URL && env.PUBLIC_SUPABASE_KEY);

async function request<T>(query: string, init: RequestInit = {}): Promise<T> {
	const response = await fetch(`${env.PUBLIC_SUPABASE_URL}/rest/v1/comments?${query}`, {
		...init,
		headers: {
			apikey: env.PUBLIC_SUPABASE_KEY as string,
			'Content-Type': 'application/json',
			...init.headers
		}
	});
	if (!response.ok) throw new Error(`Comments request failed: HTTP ${response.status}`);
	return response.json();
}

export function fetchComments(slug: string): Promise<Comment[]> {
	const params = new URLSearchParams({
		post_slug: `eq.${slug}`,
		select: COLUMNS,
		order: 'created_at.asc'
	});
	return request(params.toString());
}

export async function postComment(slug: string, name: string, body: string): Promise<Comment> {
	const [comment] = await request<Comment[]>(`select=${COLUMNS}`, {
		method: 'POST',
		headers: { Prefer: 'return=representation' },
		body: JSON.stringify({ post_slug: slug, name, body })
	});
	return comment;
}

<script lang="ts">
	import { onMount } from 'svelte';
	import { commentsEnabled, fetchComments, postComment, type Comment } from '$lib/utils/comments';

	export let slug: string;

	let comments: Comment[] = [];
	let status: 'loading' | 'ready' | 'error' = 'loading';
	let name = '';
	let body = '';
	let submitting = false;
	let submitFailed = false;

	onMount(async () => {
		if (!commentsEnabled) return;
		try {
			comments = await fetchComments(slug);
			status = 'ready';
		} catch {
			status = 'error';
		}
	});

	async function handleSubmit(): Promise<void> {
		submitting = true;
		submitFailed = false;
		try {
			const comment = await postComment(slug, name.trim(), body.trim());
			comments = [...comments, comment];
			body = '';
		} catch {
			submitFailed = true;
		} finally {
			submitting = false;
		}
	}
</script>

{#if commentsEnabled}
	<section class="comments">
		<p class="label">comments</p>

		{#if status === 'loading'}
			<p class="muted">loading the heckling...</p>
		{:else if status === 'error'}
			<p class="muted">comments are napping right now. the post still works though.</p>
		{:else}
			{#if comments.length === 0}
				<p class="muted">no comments yet. Be the first person the chime in.</p>
			{/if}

			{#each comments as comment (comment.id)}
				<div class="comment">
					<p class="meta">
						<strong>{comment.name}</strong>
						<time class="date" datetime={comment.created_at}>{comment.created_at.slice(0, 10)}</time
						>
					</p>
					<p class="body">{comment.body}</p>
				</div>
			{/each}

			<form on:submit|preventDefault={handleSubmit}>
				<label for="comment-name">your name</label>
				<input id="comment-name" type="text" bind:value={name} maxlength="50" required />

				<label for="comment-body">comment</label>
				<textarea id="comment-body" bind:value={body} maxlength="2000" rows="4" required></textarea>

				<button type="submit" disabled={submitting || !name.trim() || !body.trim()}>
					{submitting ? 'posting...' : 'post comment →'}
				</button>

				{#if submitFailed}
					<p class="failed" role="alert">that didn't post. try again in a bit.</p>
				{/if}
			</form>
		{/if}
	</section>
{/if}

<style>
	.comments {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid var(--rule);
	}
	.muted {
		color: var(--muted);
		font-size: 0.9rem;
	}
	.comment {
		margin-bottom: 1.5rem;
	}
	.meta {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0 0.75rem;
		margin: 0;
		font-size: 0.9rem;
		overflow-wrap: anywhere;
	}
	.body {
		margin: 0.25rem 0 0;
		font-size: 0.95rem;
		white-space: pre-wrap;
		overflow-wrap: anywhere;
	}
	form {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
	}
	label {
		font-size: 0.8rem;
		color: var(--muted);
		margin-top: 1.25rem;
	}
	input,
	textarea {
		font: inherit;
		color: var(--fg);
		background: transparent;
		border: 0;
		border-bottom: 1px solid var(--rule);
		padding: 0.5rem 0;
		transition: border-color 0.15s ease;
	}
	textarea {
		resize: vertical;
		border: 1px solid var(--rule);
		padding: 0.75rem;
		margin-top: 0.5rem;
	}
	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--accent);
	}
	button {
		align-self: flex-start;
		margin-top: 1.5rem;
		font: inherit;
		color: var(--bg);
		background: var(--fg);
		border: 1px solid var(--fg);
		padding: 0.6rem 1.25rem;
		cursor: pointer;
		transition:
			background 0.15s ease,
			border-color 0.15s ease,
			transform 0.15s ease;
	}
	button:hover:not(:disabled) {
		background: var(--accent);
		border-color: var(--accent);
		transform: rotate(-1.5deg);
	}
	button:disabled {
		cursor: not-allowed;
		opacity: 0.35;
	}
	.failed {
		color: var(--accent);
		font-size: 0.85rem;
		margin: 1rem 0 0;
	}
</style>

<script lang="ts">
	type PostSummary = {
		slug: string;
		title: string;
		date: string;
		categories?: string[];
	};

	export let posts: PostSummary[];
</script>

<ol class="post-list">
	{#each posts as post (post.slug)}
		<li>
			<span class="date">{post.date}</span>
			<div class="body">
				<a href="/blog/{post.slug}" class="post-link" target="_blank">{post.title}</a>
				{#if post.categories && post.categories.length > 0}
					<div class="tags">
						{#each post.categories as category (category)}
							<a class="tag" href="/category/{category}">{category}</a>
						{/each}
					</div>
				{/if}
			</div>
		</li>
	{/each}
</ol>

<style>
	.post-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	li {
		display: grid;
		grid-template-columns: 7.5rem 1fr;
		gap: 0.25rem 1.5rem;
		padding: 1.1rem 0;
		border-top: 1px solid var(--rule);
	}
	li:last-child {
		border-bottom: 1px solid var(--rule);
	}
	.date {
		padding-top: 0.15rem;
	}
	.post-link {
		font-weight: 500;
		text-decoration: none;
	}
	.post-link::after {
		content: ' ←';
		color: var(--accent);
		opacity: 0;
		transition: opacity 0.15s ease;
	}
	.post-link:hover::after {
		opacity: 1;
	}
	@media (max-width: 560px) {
		li {
			grid-template-columns: 1fr;
		}
	}
</style>

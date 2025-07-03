<script lang="ts">
	export let data;
	const { posts, category, error } = data;
</script>

<div class="posts-container">
	<header class="page-header">
		<h1 class="page-title">
			<span class="page-title-tag">[{category}]</span> Posts
		</h1>
		<p class="post-count">{posts?.length || 0} posts found</p>
	</header>

	{#if error}
		<div class="error-box">
			<p class="error-text">ERROR: {error}</p>
			<p class="error-subtitle">Something broke, probably my fault</p>
		</div>
	{:else if posts && posts.length > 0}
		<div class="posts-grid">
			{#each posts as post (post.slug)}
				<article class="post-card">
					<h2 class="post-title">
						<a href="/blog/{post.slug}" class="post-link">{post.title}</a>
					</h2>

					<div class="post-meta">
						<span class="date">{post.date}</span>
						{#if post.categories && post.categories.length > 0}
							<div class="tags">
								{#each post.categories as category(category)}
									<a class="tag" href="/category/{category}">{category}</a>
								{/each}
							</div>
						{/if}
					</div>

				</article>
			{/each}
		</div>
	{:else}
		<div class="empty-state">
			<p class="empty-text">No posts available.</p>
			<p class="empty-subtitle">Check back later for some quality bad code!</p>
		</div>
	{/if}
</div>

<style>
		.page-title-tag {
        background: var(--pastelYellow);
        border: 3px solid var(--black);
        padding: 0.5rem 1rem;
        box-shadow: 6px 6px 0 var(--black);
        color: var(--black);
        font-weight: 900;
        transform: rotate(-2deg);
        display: inline-block;
		}

    .posts-container {
        max-width: min(60rem, 90vw);
        margin: 0 auto;
        padding: 2rem 1rem;
    }

    .page-header {
        margin-bottom: 3rem;
        text-align: center;
        border-bottom: 4px solid var(--black);
        padding-bottom: 2rem;
    }

    .page-title {
        font-size: clamp(2.5rem, 6vw, 4rem);
        font-weight: 900;
        margin: 0 0 1rem 0;
        color: var(--black);
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .post-count {
        font-size: 1.1rem;
        color: var(--pastelBlue);
        font-weight: bold;
        margin: 0;
        text-transform: uppercase;
    }

    .posts-grid {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    .post-card {
        border: 3px solid var(--black);
        padding: 2rem;
        background: var(--offWhite);
        box-shadow: 8px 8px 0 var(--black);
        transition: all 0.3s ease;
    }

    .post-card:hover {
        box-shadow: 4px 4px 0 var(--black);
        transform: translate(2px, 2px);
    }

    .post-title {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        line-height: 1.2;
    }

    .post-link {
        color: var(--black);
        text-decoration: none;
        font-weight: bold;
        transition: color 0.2s ease;
    }

    .post-link:hover {
        color: var(--pastelRed);
        text-decoration: underline;
    }

    .post-meta {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }

    .error-box {
        border: 3px solid darkred;
        padding: 2rem;
        text-align: center;
        box-shadow: 8px 8px 0 darkred;
    }

    .error-text {
        color: darkred;
        font-weight: 900;
        font-size: 1.5rem;
        margin: 0 0 0.5rem 0;
        text-transform: uppercase;
    }

    .error-subtitle {
        color: #666;
        margin: 0;
        font-style: italic;
    }

    .empty-state {
        text-align: center;
        padding: 4rem 2rem;
        border: 3px solid var(--pastelBlue);
        background: var(--pastelYellow);
    }

    .empty-text {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0 0 1rem 0;
        color: var(--black);
    }

    .empty-subtitle {
        color: var(--pastelBlue);
        margin: 0;
        font-style: italic;
    }

    /* Mobile adjustments */
    @media (max-width: 768px) {
        .posts-grid {
            grid-template-columns: 1fr;
        }

        .post-card {
            padding: 1.5rem;
        }

        .page-header {
            margin-bottom: 2rem;
        }
    }
</style>
<script lang="ts">
	import type { PostData } from '$lib/types/post';
	export let data: { post: PostData, headerImage: string | null };
	const { title, date, Content } = data.post;
	const headerImage: string | null = data.headerImage;
	const categories: string[] | undefined = data.post.categories;
	const description: string = `${title || 'web development'} - Published ${date}`;
	const pageUrl: string = `https://scumble.dev/blog/${data.post.slug}`;
	const imageUrl: string = data.headerImage ? `https://scumble.dev${data.headerImage}` : 'https://scumble.dev/gifs/Scum_Blog.gif';
</script>

<svelte:head>
	<title>{title} - Scum Blog</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:image" content={imageUrl} />
	<meta property="article:published_time" content={date} />
	<meta property="article:author" content="Scumble" />
	{#if categories}
		{#each categories as category (category)}
			<meta property="article:tag" content={category} />
		{/each}
	{/if}
	<link rel="canonical" href={pageUrl} />
</svelte:head>

<article>
	<a href="/blog" class="back">← back to the pile</a>

	{#if headerImage}
		<img class="headerImage" src={data.headerImage} alt="article header" />
	{/if}

	<header class="post-header">
		<h1 class="title">{title}</h1>
		<div class="meta">
			<time class="date" datetime={date}>{date}</time>
			{#if categories && categories.length > 0}
				<div class="tags">
					{#each categories as category (category)}
						<a class="tag" href="/category/{category}">{category}</a>
					{/each}
				</div>
			{/if}
		</div>
	</header>

	<div class="content">
		<Content />
	</div>

	<p class="eof">-- EOF --</p>
</article>

<style>
	.back {
		display: inline-block;
		margin-bottom: 2rem;
		font-size: 0.85rem;
		color: var(--muted);
		text-decoration: none;
	}
	.eof {
		margin: 4rem 0 0;
		text-align: center;
		font-size: 0.8rem;
		color: var(--muted);
		letter-spacing: 0.1em;
	}
</style>

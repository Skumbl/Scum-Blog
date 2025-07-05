<script lang="ts">
	import type { PostData } from '$lib/types/post';
	export let data: { post: PostData, headerImage: string | null };
	const { title, date, Content } = data.post;
	const headerImage: string | null = data.headerImage;
	const categories: string[] | undefined = data.post.categories;
	const description: string = `Scumble's post on ${categories?.join(', ') || 'web development'} - Published ${date}`;
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

<article class="container">
	{#if headerImage}
		<img
			class="headerImage"
			src={data.headerImage}
			alt="article header"
		/>
	{/if}

	<header class="post-header">
		<h1 class="title">{title}</h1>

		<time class="date" datetime={date}>
			{date}
		</time>
		{#if categories && categories.length > 0}
			<div class="tags">
				{#each categories as category (category)}
					<a class="tag" href="/category/{category}">{category}</a>
				{/each}
			</div>
		{/if}
	</header>
	<div class="content">
		<Content />
	</div>
	<div class = "spacer"></div>
</article>

<style>
		.container {
        max-width: min(60rem, 90vw);
        margin: 0 auto;
        padding: 0 1rem;
        text-align: left;
    }
		.spacer {
				padding-top: 2rem;
		}
</style>
<script lang="ts">
	import PostList from '$lib/components/PostList.svelte';

	export let data;
	const { posts, category, error } = data;
	const postCount: number = posts?.length || 0;
</script>

<svelte:head>
	<title>[{category}] Posts - Scum Blog</title>
	<meta name="description" content={`${postCount} blog posts about ${category}`} />
	<meta property="og:title" content={`[${category}] Posts - Scum Blog`} />
	<meta property="og:description" content={`${postCount} blog posts about ${category}`} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`https://scumble.dev/category/${category}`} />
	<meta property="og:image" content="https://scumble.dev/gifs/Scum_Blog.gif" />
	<link rel="canonical" href={`https://scumble.dev/category/${category}`} />
</svelte:head>

<h1 class="page-title"><span class="hash">#</span>{category}</h1>
<p class="page-subtitle">
	{postCount} posts found. <a href="/blog">← all posts</a>
</p>

{#if error}
	<div class="error-box">
		<p class="error-text">ERROR: {error}</p>
		<p class="error-subtitle">something broke, probably my fault</p>
	</div>
{:else if posts && posts.length > 0}
	<PostList {posts} />
{:else}
	<div class="error-box">
		<p class="error-text">no posts available.</p>
		<p class="error-subtitle">check back later for some quality bad code!</p>
	</div>
{/if}

<style>
	.hash {
		color: var(--accent);
	}
</style>

<script lang="ts">
	import PostList from '$lib/components/PostList.svelte';

	export let data;
	const { posts, error } = data;
	const postCount: number = posts?.length || 0;
</script>

<svelte:head>
	<title>All Blog Posts - Scum Blog</title>
	<meta name="description" content={`Browse all ${postCount} blog posts about JavaScript, web development, and bad coding practices`} />
	<meta property="og:title" content="All Blog Posts - Scum Blog" />
	<meta property="og:description" content={`Browse all ${postCount} blog posts about JavaScript, web development, and bad coding practices`} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://scumble.dev/blog" />
	<meta property="og:image" content="https://scumble.dev/gifs/floppy_disk.gif" />
	<link rel="canonical" href="https://scumble.dev/blog" />
</svelte:head>

<h1 class="page-title">blog posts</h1>
<p class="page-subtitle">{postCount} posts found. my mindpalace is a waffle house.</p>

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
		<p class="error-subtitle">gonna keep it a stack, I don't know what broke</p>
	</div>
{/if}

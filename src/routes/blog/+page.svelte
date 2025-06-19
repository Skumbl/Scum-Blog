<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ posts, error } = data);
	let relativePath: string = "/blog/"
</script>

<h1>Blog Posts</h1>
{#if error}
	<div class="error">Error: {error}</div>
{:else if posts && posts.length > 0}
	{#each posts as post (post.title)}
		<h2><a href={relativePath + post.slug}>{post.title}</a></h2>
		<p>{post.date}</p>
	{/each}
{:else}
	<p>No posts available.</p>
{/if}
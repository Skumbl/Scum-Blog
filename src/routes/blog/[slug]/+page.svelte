<script lang="ts">
	import type { PostData } from '$lib/types/post';
	export let data: { post: PostData, headerImage: string | null };
	const { title, date, Content } = data.post;
	const headerImage: string | null = data.headerImage;
	const categories: string[] | undefined = data.post.categories;

</script>

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
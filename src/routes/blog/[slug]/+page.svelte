<script lang="ts">
	import type { PostData } from '$lib/types/post';
	export let data: PostData;
	const { title, date, Content} = data;
</script>

<article class="container">
	<h1>{title}</h1>
	<p>{date}</p>
	<Content />
</article>

<style>
		.container {
        max-width: 50%;
        margin: 0 auto;
        padding: 0 1rem;
        text-align: left;
    }
</style>
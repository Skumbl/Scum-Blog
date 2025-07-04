<script>
	import '$lib/styles/style.css'
	import Header  from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fade } from 'svelte/transition';
	import { themeStore } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';

	onMount(() => {
		themeStore.init();
	});

	export let data;
</script>

<Header />

<!--ngl might not keep the transitions, makes the site feel a little slower than it is-->
{#key data.currentRoute}
	<main in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
		<slot />
	</main>
{/key}

<Footer />
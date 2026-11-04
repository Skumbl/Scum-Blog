<script>
	import '$lib/styles/style.css'
	import Header  from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fade } from 'svelte/transition';
	import { themeStore } from '$lib/stores/theme.js';
	import { playClickSound } from '$lib/utils/clickSound';
	import { onMount } from 'svelte';

	onMount(() => {
		themeStore.init();

		// capture phase: a button's own handler may re-render and detach the click target
		const handleClick = (event) => {
			if (event.target.closest('button, nav a, .home-link, .post-link')) playClickSound();
		};
		document.addEventListener('click', handleClick, { capture: true });
		return () => document.removeEventListener('click', handleClick, { capture: true });
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
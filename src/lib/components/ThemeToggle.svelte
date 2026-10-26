<script lang="ts">
	import { themeStore } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	//init theme
	onMount(() => {
		themeStore.init();
	});

	function handleThemeToggle(): void {
		themeStore.toggleTheme();
	}
</script>

<button on:click={handleThemeToggle} aria-label="Toggle dark mode">
	{#if $themeStore === 'light'}
		<img src="/gifs/moon.gif" alt="" />
		<span>troglodyte</span>
	{:else}
		<img src="/gifs/earth.gif" alt="" />
		<span>flashbang</span>
	{/if}
</button>

<style>
	button {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.15rem 0.5rem;
		font: inherit;
		color: var(--muted);
		background: none;
		border: 1px solid var(--rule);
		border-radius: 999px;
		cursor: pointer;
		transition: color 0.15s ease, border-color 0.15s ease;
	}
	button:hover {
		color: var(--fg);
		border-color: var(--accent);
	}
	img {
		width: 14px;
		height: 14px;
		object-fit: contain;
	}
</style>

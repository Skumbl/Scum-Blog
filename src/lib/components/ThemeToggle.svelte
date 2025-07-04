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

<div class="theme-toggle">
	<button
		on:click={handleThemeToggle}
		aria-label="Toggle dark mode"
	>
		{#if $themeStore === 'light'}
			<img src="/gifs/moon.gif" alt="moon" class="nav-gif">
			<span>Troglodyte</span>
		{:else}
			<img src="/gifs/earth.gif" alt="earf" class="nav-gif">
			<span>FlashBang</span>
		{/if}
	</button>
</div>


<style>
    .theme-toggle :global(button) {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        background: var(--black);
        color: var(--offWhite);
        border: 3px solid var(--black);
        font: inherit;
        cursor: pointer;
        transition: all 0.2s ease;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 0.9rem;
        letter-spacing: 0.3px;
    }

    .theme-toggle :global(button:hover) {
        background: var(--pastelYellow);
        color: var(--black);
        border: 3px solid var(--black);
        box-shadow: 4px 4px 0 var(--black);
        transform: translate(-2px, -2px);
    }
    .nav-gif {
        width: 18px;
        height: 18px;
        object-fit: contain;
        opacity: 0.8;
        transition: all 0.3s ease;
    }

    /* Mobile adjustments */
    @media (max-width: 768px) {
        .theme-toggle :global(button) {
            padding: 0.5rem 0.75rem;
            font-size: 0.8rem;
        }
    }
</style>
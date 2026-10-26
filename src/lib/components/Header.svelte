<script>
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	const links = [
		{ href: '/about', label: 'about', gif: '/gifs/wizard.gif' },
		{ href: '/blog', label: 'blog', gif: '/gifs/floppy_disk.gif' },
		{ href: '/contact', label: 'contact', gif: '/gifs/email.gif' }
	];
</script>

<header>
	<a href="/" class="home-link">
		<img src="/gifs/cd.gif" alt="" class="cd" />
		<span>scum<span class="accent">.</span>blog</span>
	</a>

	<nav>
		<ul>
			{#each links as link (link.href)}
				<li>
					<a
						href={link.href}
						class:active={$page.url.pathname.startsWith(link.href)}
					>
						<img src={link.gif} alt="" />
						<span>{link.label}</span>
					</a>
				</li>
			{/each}
			<li><ThemeToggle /></li>
		</ul>
	</nav>
</header>

<style>
	header {
		width: 100%;
		max-width: calc(var(--measure) + 2 * var(--gutter));
		margin: 0 auto;
		padding: 1.5rem var(--gutter);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		border-bottom: 1px solid var(--rule);
	}
	.home-link {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-weight: 700;
		text-decoration: none;
	}
	.accent {
		color: var(--accent);
	}
	.cd {
		width: 18px;
		height: 18px;
		animation: spin 8s linear infinite;
	}
	.home-link:hover .cd {
		animation-duration: 0.4s;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.25rem 1.25rem;
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: 0.9rem;
	}
	nav a {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		text-decoration: none;
		color: var(--muted);
	}
	nav a:hover,
	nav a.active {
		color: var(--fg);
	}
	nav a.active span::before {
		content: '>';
		color: var(--accent);
		margin-right: 0.25rem;
	}
	nav img {
		width: 14px;
		height: 14px;
		object-fit: contain;
		filter: grayscale(1);
		opacity: 0.6;
		transition: filter 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
	}
	nav a:hover img,
	nav a.active img {
		filter: none;
		opacity: 1;
		transform: rotate(-12deg) scale(1.2);
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>

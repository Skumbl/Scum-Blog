<script lang="ts">
	export let data;
	const { post, error } = data;

	// each letter gets a colour + a tilt so it looks like a ransom note
	const colors = ['var(--red)', 'var(--blue)', 'var(--yellow)'];
	const tilts = [-6, 4, -2, 5, 0, -4, 3, -5, 6];
	const letters = 'scum.blog'.split('').map((char, i) => ({
		char,
		color: char === '.' ? 'var(--fg)' : colors[i % colors.length],
		tilt: tilts[i % tilts.length]
	}));

	let logoClicked = false;
	let spinCount = 0;

	function handleLogoClick() {
		logoClicked = true;
		spinCount++;
		setTimeout(() => {
			logoClicked = false;
		}, 1000);
	}
</script>

<svelte:head>
	<title>Scum Blog</title>
	<meta name="description" content="A blog by and for bad developers" />
	<meta property="og:title" content="Scum Blog" />
	<meta property="og:description" content="A blog by and for bad developers" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://scumble.dev" />
	<meta property="og:image" content="https://scumble.dev/gifs/Scum_Blog.gif" />
</svelte:head>

<section class="hero">
	<button
		class="logo"
		class:clicked={logoClicked}
		on:click={handleLogoClick}
		aria-label="Spin the logo (clicked {spinCount} times)"
	>
		<span class="wordmark" aria-hidden="true">
			{#each letters as letter, i (i)}
				<span style="--i: {i}; --tilt: {letter.tilt}deg; color: {letter.color}">{letter.char}</span>
			{/each}
		</span>
		<span class="badge" aria-hidden="true">v0.9</span>
	</button>
	<p class="spin-counter" class:visible={spinCount > 0}>useless spin counter: {spinCount}</p>

	<p class="status"><span class="dot"></span>perpetually 90% complete</p>
	<h1 class="tagline">a blog written by and for bad developers.</h1>
</section>

<section class="latest">
	<p class="label">latest post</p>

	{#if error}
		<div class="error-box">
			<p class="error-text">ERROR: shidiot broke his website</p>
			<p class="error-subtitle">HTTP 500</p>
		</div>
	{:else if post}
		<a href="/blog/{post.slug}" class="post-link" target="_blank">{post.title}</a>
		<div class="post-meta">
			<span class="date">{post.date}</span>
			{#if post.categories}
				<div class="tags">
					{#each post.categories as category (category)}
						<a class="tag" href="/category/{category}" target="_blank">{category}</a>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</section>

<nav class="cta">
	<a href="/blog" target="_blank">→ view all posts</a>
	<a href="/about" target="_blank">→ about this mess</a>
</nav>

<style>
	.hero {
		padding: 2rem 0 4rem;
	}
	.logo {
		display: block;
		padding: 0;
		margin: 0 0 0.5rem;
		background: none;
		border: 0;
		cursor: pointer;
	}
	.logo {
		position: relative;
	}
	.wordmark {
		display: flex;
		font: inherit;
		font-size: clamp(2.75rem, 12vw, 5rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1;
	}
	.wordmark span {
		display: inline-block;
		transform: rotate(var(--tilt));
		text-shadow: 0.05em 0.05em 0 var(--fg);
	}
	.logo:hover .wordmark span {
		animation: bounce 0.6s ease-in-out calc(var(--i) * 0.05s);
	}
	.badge {
		position: absolute;
		top: -0.4rem;
		right: -2.75rem;
		padding: 0.1rem 0.4rem;
		font: inherit;
		font-size: 0.7rem;
		font-weight: 700;
		color: var(--bg);
		background: var(--accent);
		transform: rotate(12deg);
	}
	.logo.clicked {
		animation: spin 1s ease-in-out;
	}
	.spin-counter {
		margin: 0 0 2.5rem;
		font-size: 0.8rem;
		color: var(--muted);
		visibility: hidden;
	}
	.spin-counter.visible {
		visibility: visible;
	}
	.status {
		margin: 0 0 0.75rem;
		font-size: 0.8rem;
		color: var(--accent);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
	.tagline {
		margin: 0;
		font-size: clamp(1.4rem, 4.5vw, 2rem);
		font-weight: 500;
		font-style: italic;
		max-width: 28ch;
	}
	.latest {
		padding: 2rem 0;
		border-top: 1px solid var(--rule);
		border-bottom: 1px solid var(--rule);
	}
	.post-link {
		display: inline-block;
		font-size: 1.2rem;
		font-weight: 700;
		text-decoration: none;
		margin-bottom: 0.5rem;
	}
	.post-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.25rem 1.25rem;
	}
	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 2rem;
		padding-top: 2rem;
	}
	.cta a {
		text-decoration: none;
		color: var(--muted);
	}
	.cta a:hover {
		color: var(--accent);
	}
	@keyframes bounce {
		30% {
			transform: translateY(-0.18em) rotate(calc(var(--tilt) * -2));
		}
		60% {
			transform: translateY(0.04em) rotate(var(--tilt));
		}
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>

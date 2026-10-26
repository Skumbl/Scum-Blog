<footer>
	<p class="made">made in sveltekit by me ヾ(＾∇＾)</p>

	<div class="columns">
		<ul>
			<li class="heading">site</li>
			<li><a href="/about">about me</a></li>
			<li><a href="/blog">all blog posts</a></li>
			<li><a href="/contact">email me</a></li>
		</ul>
		<ul>
			<li class="heading">elsewhere</li>
			<li><a href="https://x.com/Skumbl" target="_blank">xitter</a></li>
			<li><a href="https://github.com/Skumbl" target="_blank">github</a></li>
			<li><a href="https://discord.com/users/scumble" target="_blank">discord</a></li>
		</ul>
	</div>
</footer>

<style>
	footer {
		width: 100%;
		max-width: calc(var(--measure) + 2 * var(--gutter));
		margin: 6rem auto 0;
		padding: 2rem var(--gutter) 3rem;
		border-top: 1px solid var(--rule);
		font-size: 0.85rem;
		color: var(--muted);
	}
	.made {
		margin: 0 0 1.5rem;
	}
	.columns {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem 4rem;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.heading {
		color: var(--fg);
		margin-bottom: 0.25rem;
	}
	a {
		text-decoration: none;
	}
	a::before {
		content: '↳ ';
		color: var(--rule);
	}
	a:hover::before {
		color: var(--accent);
	}
</style>

<script>
	const setup = [
		{
			group: 'system',
			rows: [
				['os', 'Fedora Linux 42 (KDE Plasma Desktop Edition)'],
				['shell', 'zsh - Oh My Zsh']
			]
		},
		{
			group: 'hardware',
			rows: [
				['monitor', '28" Odyssey G70A 4K UHD LED'],
				['resolution', '3840x2160 @ 144 Hz'],
				['cpu', 'AMD Ryzen 7 5700X'],
				['gpu', 'AMD Radeon RX 7900 XT [Discrete]'],
				['memory', '31.26 GiB total']
			]
		},
		{
			group: 'peripherals',
			rows: [
				['keyboard', 'HHKB Professional 2'],
				['mouse', 'MX Master 3s'],
				['microphone', 'Audio-Technica ATR1500x'],
				['headphones', 'Beyerdynamic DT770 (80 ohm)']
			]
		},
		{
			group: 'desktop',
			rows: [
				['de', 'KDE Plasma 6.4.1'],
				['wm', 'KWin (Wayland)'],
				['wm theme', 'Ant-Dark'],
				['theme', 'Breeze (Ant-Dark) [Qt], Breeze [GTK3]'],
				['icons', 'Papirus-Dark [Qt], Papirus-Dark [GTK3/4]'],
				['font', 'BlexMono Nerd Font (10pt)'],
				['cursor', 'Posy_Cursor_Black (32px)'],
				['terminal', 'Alacritty'],
				['editor', 'Zed with Vim motions']
			]
		}
	];
</script>

<svelte:head>
	<title>About Scumble - Scum Blog</title>
	<meta name="description" content="About Rat King Scumble" />
	<meta property="og:title" content="About Scumble - Scum Blog" />
	<meta property="og:description" content="About rat king Scumble" />
	<meta property="og:type" content="profile" />
	<meta property="og:url" content="https://scumble.dev/about" />
	<meta property="og:image" content="https://scumble.dev/gifs/triangle-moving.gif" />
	<link rel="canonical" href="https://scumble.dev/about" />
</svelte:head>

<div class="intro">
	<div>
		<h1 class="page-title">about me</h1>
		<p class="page-subtitle">who am I and what is this blog?</p>
	</div>
	<figure>
		<img src="/gifs/triangle-moving.gif" alt="super pfp" />
		<figcaption>(that's a real picture of me)</figcaption>
	</figure>
</div>

<section class="content">
	<p>
		<strong class="hello">hello ( ﾟ▽ﾟ)/</strong>
		my name is Jan, but I've been going by Scumble online for the last 10 years so it's what I tend
		to stick with. I'm a corporate developer by trade, but I love to code in my free time as well so
		I made my own little corner of the internet.
	</p>
	<p>
		My online name comes from a book by Terry Pratchett. I chose it when I was a high-school
		freshman, and it just kind of stuck as the name I use online, so now you're stuck with the scum
		blog.
	</p>
	<p>
		The point of this blog isn't just to talk about programming projects that I work on (though I
		suspect that to be one of the primary topics) but also my opinions on things I care about.
	</p>
	<p>
		The projects I work on professionally tend to be very old and very established development
		tools, like Java, Spring, and AngularJS, so one of the reasons I made this blog was to give
		myself a way to practice building something in the JavaScript ecosystem and learn some new
		frameworks.
	</p>
	<p class="aside">(I also just like to yap)</p>
	<p>
		Do I like the JavaScript ecosystem? Eh, I didn't love it originally but the more I use
		TypeScript the more I like it. (that is until resolving promises get too involved)
	</p>
	<p class="boilerplate">I'm also the number-one boilerplate enjoyer — so what do I know</p>
</section>

<section class="setup">
	<p class="prompt"><span class="accent">scumble@desk</span> ~ $ fastfetch</p>
	{#each setup as section (section.group)}
		<h2>{section.group}</h2>
		<dl>
			{#each section.rows as [key, value] (key)}
				<dt>{key}</dt>
				<dd>{value}</dd>
			{/each}
		</dl>
	{/each}
	<p class="prompt">~ $ <span class="caret">█</span></p>
</section>

<style>
	.intro {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-end;
		gap: 1.5rem;
		margin-bottom: 1rem;
	}
	figure {
		margin: 0;
		text-align: center;
	}
	figure img {
		width: 7rem;
		border: 1px solid var(--rule);
		transform: rotate(-3deg);
		transition: transform 0.3s ease;
	}
	figure img:hover {
		transform: rotate(3deg) scale(1.05);
	}
	figcaption {
		font-size: 0.75rem;
		color: var(--muted);
	}
	.hello {
		color: var(--accent);
		display: block;
		margin-bottom: 0.25rem;
	}
	.aside {
		color: var(--muted);
		font-style: italic;
	}
	.boilerplate {
		display: inline-block;
		background: var(--accent-soft);
		padding: 0.15rem 0.5rem;
		transform: rotate(-1deg);
	}
	.setup {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid var(--rule);
		font-size: 0.85rem;
	}
	.prompt {
		color: var(--muted);
		margin: 0 0 1.5rem;
	}
	.prompt:last-child {
		margin: 1.5rem 0 0;
	}
	.accent {
		color: var(--accent);
	}
	.caret {
		animation: caret 1.1s steps(1) infinite;
	}
	h2 {
		font-size: 0.85rem;
		color: var(--accent);
		margin: 1.5rem 0 0.5rem;
	}
	h2::before {
		content: '-- ';
		color: var(--rule);
	}
	dl {
		display: grid;
		grid-template-columns: 8rem 1fr;
		gap: 0.15rem 1rem;
		margin: 0;
	}
	dt {
		color: var(--muted);
	}
	dd {
		margin: 0;
	}
</style>

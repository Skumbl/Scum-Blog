<script lang="ts">
	export let data;
	const { post, error } = data;

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

<div class="hero-section">
	<div class="image-wrapper">
		<button
			class:clicked={logoClicked}
			on:click={handleLogoClick}
			aria-label="Spin the logo (clicked {spinCount} times)"
		>
			<img
				src="/gifs/Scum_Blog.gif"
				alt="Scum Blog Banner"
			>
		</button>
		{#if spinCount > 0}
			<p class="spin-counter">Spins: {spinCount}</p>
		{/if}
	</div>

	<div class="front-blurb">
		<div class="status-bar">
			<span class="status-indicator"></span>
			<h1 class="error-text">Perpetually 90% Complete</h1>
		</div>

		<h2 class="tagline">
			<i>a blog written by and for bad developers</i>
		</h2>

		<div class="latest-post-section">
			<div class="section-header">
				<span class="bracket">[</span>
				<strong>Latest Blog Post</strong>
				<span class="bracket">]</span>
			</div>

			{#if error}
				<div class="error-box">
					<p class="error-text">ERROR: shidiot broke his website</p>
					<p class="error-code">HTTP 500</p>
				</div>
			{:else if post}
				<div class="post-preview">
					<h3><a href="/blog/{post.slug}" class="post-link">{post.title}</a></h3>

					<div class="post-meta">
						<span class="date">{post.date}</span>
						<div class="tags-container">
							{#if post.categories}
								{#each post.categories as category (category)}
									<a class="tag" href="/category/{category}">{category}</a>
								{/each}
							{/if}
						</div>
					</div>

				</div>
			{/if}
		</div>

		<div class="cta-section">
			<a href="/blog" class="cta-button">View All Posts</a>
			<a href="/about" class="cta-button secondary">About This Mess</a>
		</div>
	</div>
</div>

<style>
    .hero-section {
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem 1rem;
    }
    .image-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 4rem;
        position: relative;
    }
    .image-wrapper button {
        cursor: pointer;
        transition: transform 0.3s ease;
        border: 2px solid transparent;
        background: none;
        padding: 0.5rem;
        position: relative;
    }
    img {
        scale: 1.5;
        display: block;
    }
    .image-wrapper button.clicked {
        animation: spin 1s ease-in-out;
    }
    .spin-counter {
        margin-top: 1rem;
        font-size: 0.9rem;
        color: var(--pastelBlue);
        font-weight: bold;
    }
    .front-blurb {
        max-width: min(40rem, 90vw);
        margin: 2rem auto;
        padding: 2.5rem;
        text-align: left;
        outline: 2px solid var(--black);
        outline-offset: -2px;
        box-shadow: 10px 10px var(--black);
        background: var(--offWhite);
        transition: box-shadow 0.5s ease-out;
    }
    .front-blurb:hover {
        box-shadow: 4px 4px 0 var(--black);
    }
    .status-bar {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--black);
    }
    .status-indicator {
        width: 12px;
        height: 12px;
        background: red;
        border-radius: 50%;
        animation: blink 2s infinite;
    }
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0.3; }
    }
    .error-text {
        color: darkred;
        margin: 0;
        font-weight: 900;
        text-transform: uppercase;
    }
    .tagline {
        margin: 0 0 2rem 0;
        color: var(--pastelBlue);
        font-size: 1.1rem;
    }

    .tags-container {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .latest-post-section {
        margin-bottom: 2rem;
    }
    .section-header {
        margin-bottom: 1rem;

        font-weight: bold;
        text-transform: uppercase;
    }
    .bracket {
        color: var(--pastelRed);
        font-weight: 900;
    }
    .error-box {
        background: #ffe6e6;
        border: 2px solid darkred;
        padding: 1rem;
        margin: 1rem 0;
    }
    .error-code {
        font-size: 0.9rem;
        color: #666;
        margin: 0.5rem 0 0 0;
    }
    .post-preview {
        border: 2px solid var(--black);
        padding: 1.5rem;
    }
		.post-preview h3 {
				padding: 0;
				margin: 0;
		}
    .post-link {
        color: var(--black);
        text-decoration: none;
        font-weight: bold;
        font-size: 1.5rem;
        display: block;
        margin-bottom: 1rem;
        transition: color 0.2s ease;
    }
    .post-link:hover {
        color: var(--pastelRed);
        text-decoration: underline;
    }
    .post-meta {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
    .cta-section {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }
    .cta-button {
        background: var(--black);
        color: white;
        padding: 0.75rem 1.5rem;
        text-decoration: none;
        font-weight: bold;
        border: 2px solid var(--black);
        transition: all 0.2s ease;
        text-transform: uppercase;
        font-size: 0.9rem;
    }
    .cta-button:hover {
        background: white;
        color: var(--black);
        box-shadow: 10px 10px 0 var(--black);
        transform: translate(-5px, -5px);
    }
    .cta-button.secondary {
        background: transparent;
        color: var(--black);
    }
    .cta-button.secondary:hover {
        background: var(--pastelYellow);
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    @media (max-width: 768px) {
				.image-wrapper {
						padding-top: 4rem;
				}

        .hero-section {
            min-height: 70vh;
            padding: 1rem;
        }

        .front-blurb {
            padding: 2rem;
        }

        .cta-section {
            flex-direction: column;
        }

        .post-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }
    }
</style>
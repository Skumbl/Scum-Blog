<script lang="ts">
	export let data;
	const { post, error } = data;

	// stupid spinning logo logic
	let logoClicked = false;

	function handleLogoClick() {
		logoClicked = true;

		setTimeout(() => {
			logoClicked = false;
		}, 1000);
	}
</script>

<div class="image-wrapper">
	<button class:clicked={logoClicked} on:click={handleLogoClick}>
	<img
		src="/gifs/Scum_Blog.gif"
		alt="Scum Blog Banner"
	>
	</button>
</div>

<div class="front-blurb">
	<h1 class="error-text">Site Under Construction</h1>
	<h2><i>a blog written by and for bad developers</i></h2>
	<p><strong><u>Latest Blog Post:</u></strong></p>
	{#if error}
		<p class="error-text">ERROR: shidiot broke his website</p>
	{:else if post}
		<h2><a href="/blog/{post.slug}">{post.title}</a></h2>
	{/if}
</div>

<style>
    .front-blurb {
        max-width: min(30rem, 90vw);
        margin: 0 auto;
				padding: 2rem;
        text-align: left;
        outline: 2px solid #000;
        outline-offset: -2px;
        box-shadow: 10px 10px var(--black);
        transition: box-shadow 0.5s ease-out;
    }

    .front-blurb h2 {
        margin: 0;
        padding: 0;
    }

    .front-blurb:hover {
        box-shadow: none;
    }

		.error-text {
				color: darkred;
		}

    .image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 8rem;
        padding-bottom: 8rem;
    }

    .image-wrapper button {
        cursor: pointer;
        transition: transform 0.3s ease;
				border: none;
        background: none;
        padding: 0;
    }

		img {
				scale: 1.5;
		}

    .image-wrapper button:hover {
        transform: scale(1.05);
    }

		.image-wrapper button.clicked {
			animation: spin 1s ease-in-out;
		}

		@keyframes spin {
			from { transform: rotate(0deg); }
			to { transform: rotate(360deg); }
		}
</style>
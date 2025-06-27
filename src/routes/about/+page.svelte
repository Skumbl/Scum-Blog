<script>
	import About from './About.md';
</script>

<section class="container">
	<img src="/gifs/triangle-moving.gif" alt="super pfp">
		<About />
</section>

<style>
    .container {
        max-width: min(600px, 90vw); /* 600px max, but 90% of viewport on small screens */
        margin: 0 auto;
        padding: 0 1rem;
        text-align: left;
    }
	img	{
			margin-top: 2rem;
      outline: 2px solid #000;
      outline-offset: -2px;
      box-shadow: 10px 10px var(--black);
      transition: box-shadow 0.5s ease-out;
	}
</style>
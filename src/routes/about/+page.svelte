<script>
	import About from './About.md';
</script>

<section class="container">
	<div class="content">
		<img src="/gifs/triangle-moving.gif" alt="super pfp">
		<p>(that's a real picture of me)</p>
		<About />
	</div>
</section>

<style>
		.container {
        max-width: min(50rem, 90vw);
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
		img:hover{
		box-shadow: 4px 4px 0 var(--black);
	}
</style>
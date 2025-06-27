<script>
	import '$lib/styles/style.css'
</script>

<header>
	<a href="/">Home</a>
	<nav>
		<ul>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
			<li>
				<button>Dark Mode Toggle</button>
			</li>
		</ul>
	</nav>
</header>

<style>
    header {
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

				background: var(--pastelBlue);
				color: var(--pastelYellow);

        outline: 2px solid #000;
        outline-offset: -2px;
        box-shadow: 10px 10px var(--black);
        transition: box-shadow 0.5s ease-out;
    }
    header:hover {
        box-shadow: none;
    }

    ul {
        margin: 0;
        list-style-type: none;
        display: flex;
        gap: 1rem;
    }
    a {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s ease;
    }


		a:hover {
				color: var(--pastelRed);

		}
</style>

<script>
	import '$lib/styles/style.css';
</script>
<header>
	<a href="/">
		<img src="/gifs/cd.gif" alt="Home" class="nav-gif" />
		Home
	</a>
	<nav>
		<ul>
			<li>
				<a href="/about">
					<img src="/gifs/wizard.gif" alt="About" class="nav-gif" />
					About
				</a>
			</li>
			<li>
				<a href="/blog">
					<img src="/gifs/floppy_disk.gif" alt="Blog" class="nav-gif" />
					Blog
				</a>
			</li>
			<li>
				<a href="/contact">
					<img src="/gifs/email.gif" alt="Contact" class="nav-gif" />
					Contact
				</a>
			</li>
<!--			<li>-->
<!--				<button>-->
<!--					<img src="/gifs/darkmode-icon.gif" alt="Dark Mode" class="nav-gif" />-->
<!--					Dark Mode Toggle-->
<!--				</button>-->
<!--			</li>-->
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
    a, button {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: none;
        border: none;
        font: inherit;
        cursor: pointer;
    }
    a:hover, button:hover {
        color: var(--pastelRed);
    }
    .nav-gif {
        width: 20px;
        height: 20px;
        object-fit: contain;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    a:hover .nav-gif,
    button:hover .nav-gif {
        opacity: 1;
    }
</style>
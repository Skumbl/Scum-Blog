<script>
	import '$lib/styles/style.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>
<header>
	<div class="logo-section">
		<a href="/" class="home-link">
			<img src="/gifs/cd.gif" alt="Home" class="nav-gif" />
			<span class="home-text">SCUM BLOG</span>
		</a>
	</div>

	<nav class="main-nav">
		<ul>
			<li>
				<a href="/about" class="nav-button">
					<img src="/gifs/wizard.gif" alt="About" class="nav-gif" />
					<span>About</span>
				</a>
			</li>
			<li>
				<a href="/blog" class="nav-button">
					<img src="/gifs/floppy_disk.gif" alt="Blog" class="nav-gif" />
					<span>Blog</span>
				</a>
			</li>
			<li>
				<a href="/contact" class="nav-button">
					<img src="/gifs/email.gif" alt="Contact" class="nav-gif" />
					<span>Contact</span>
				</a>
			</li>
			<li>
				<div class="theme-toggle">
					<ThemeToggle />
				</div>
			</li>
		</ul>
	</nav>
</header>

<style>
    header {
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--pastelBlue);
        color: var(--offWhite);
        border: 4px solid var(--black);
        box-shadow: 8px 8px 0 var(--black);
        transition: box-shadow 0.3s ease;
    }
    header:hover {
        box-shadow: 4px 4px 0 var(--black);
        transform: translate(2px, 2px);
    }
    .logo-section {
        display: flex;
        align-items: center;
    }
    .home-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;
        padding: 0.75rem 1rem;
        border: 3px solid var(--black);
        background: var(--pastelRed);
        color: var(--black);
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: all 0.2s ease;
    }
    .home-link:hover {
        background: var(--pastelYellow);
        box-shadow: 4px 4px 0 var(--black);
        transform: translate(-2px, -2px);
    }
    .home-text {
        font-size: 1.2rem;
        font-weight: 900;
    }
    .main-nav ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        gap: 0.75rem;
    }
    .nav-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        color: var(--black);
        text-decoration: none;
        border: 3px solid var(--black);
        background: var(--pastelYellow);
        font: inherit;
        cursor: pointer;
        transition: all 0.2s ease;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 0.9rem;
        letter-spacing: 0.3px;
    }
    .nav-button:hover {
        background: var(--pastelRed);
        box-shadow: 4px 4px 0 var(--black);
        transform: translate(-2px, -2px);
    }
    .nav-gif {
        width: 18px;
        height: 18px;
        object-fit: contain;
        opacity: 0.8;
        transition: all 0.3s ease;
    }
    .nav-button:hover .nav-gif,
    .home-link:hover .nav-gif {
        opacity: 1;
        transform: scale(1.1);
    }
    .home-link .nav-gif {
        opacity: 1;
        animation: spin-slow 8s linear infinite;
    }
    .home-link:hover .nav-gif {
        animation: spin-fast 0.5s linear infinite;
    }
    .theme-toggle {
        display: flex;
        align-items: center;
    }
    @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    @keyframes spin-fast {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    @media (max-width: 768px) {
        header {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
        }

        .main-nav ul {
            flex-wrap: wrap;
            justify-content: center;
        }

        .nav-button {
            padding: 0.5rem 0.75rem;
            font-size: 0.8rem;
        }
    }
</style>
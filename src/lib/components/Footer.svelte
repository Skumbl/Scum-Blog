<script>
	import '$lib/styles/style.css';
</script>
<footer>
	<div class="footer-container">
		<p class="footer-title">This website was made by a real life human [me ヾ(＾∇＾)] - [2025]</p>

		<div class="footer-columns">
			<div class="left-column">
				<p class="column-title">Site Pages</p>
				<ul>
					<li><a href="/about">About Me</a></li>
					<li><a href="/blog">All Blog Posts</a></li>
					<li><a href="/contact">Email Me</a></li>
				</ul>
			</div>
			<div class="right-column">
				<p class="column-title">My Stuff</p>
				<ul>
					<li><a href="https://bsky.app/profile/scumble.xyz">Blue Sky</a></li>
					<li><a href="https://bsky.app/profile/scumble.xyz">Github</a></li>
					<li><a href="https://discord.com/users/scumble">Discord</a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>

<style>
    footer {
        background: var(--black);
        color: var(--offWhite);
        border-top: 4px solid var(--black);
        margin-top: 4rem;
    }
    .footer-container {
        max-width: min(60rem, 90vw);
        margin: 0 auto;
        padding: 3rem 1rem;
    }
    .footer-title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 2rem;
        text-align: left;
        border-bottom: 3px solid var(--offWhite);
        padding-bottom: 1rem;
    }
    .footer-columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }
    .column-title {
        font-weight: bold;
        font-size: 1.1rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin-bottom: 0.5rem;
    }
    a {
        color: var(--offWhite);
        text-decoration: none;
        font-weight: 500;
        border: 2px solid transparent;
        padding: 0.25rem 0.5rem;
        display: inline-block;
        transition: all 0.2s ease;
    }
    a:hover {
        background: var(--offWhite);
        color: var(--black);
        border: 2px solid var(--offWhite);
        box-shadow: 3px 3px 0 rgba(255, 255, 255, 0.3);
        transform: translate(-1px, -1px);
    }
    @media (max-width: 768px) {
        .footer-columns {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .footer-container {
            padding: 2rem 1rem;
        }
    }
</style>
<script>
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

<div class="container">
	<section class="content">
		<div class="about-header">
			<div class="title">
				<h1 class="title-block">ABOUT ME</h1>
			</div>

			<div >
				<img src="/gifs/triangle-moving.gif" alt="super pfp">
				<p>(that's a real picture of me)</p>
			</div>
	</div>
	</section>

	<section class="about-blurb">
		<h1>[who am I?]</h1>
		<p><strong>hello ( ﾟ▽ﾟ)/</strong>
			my “name” is Scumble. I’m a developer who very originally decided to make a blog.
		</p>
		<p>
			My online name comes from a book by Terry Pratchett. I chose it when I was a high-school freshman, and it just kind of
			stuck as the name I use online, so now you’re stuck with the scum blog.
		</p>
		<p>
		The projects I work on professionally tend to be very old and very established development tools, like Java, Spring, and AngularJS,
		so one of the reasons I made this blog was to give myself a way to practice building something in the JavaScript ecosystem
		and learn some new frameworks.
		</p>
		<p>
			(I also just like to yap)
		</p>
		<p>
			Do I like the JavaScript ecosystem? Not really. But I love to learn, so here we are.
		</p>
		<div class="boilerplate">
			I'm also the number-one boilerplate enjoyer — so what do I know
		</div>
	</section>

	<section class="pc-spec">
		<h2 class="setup-title">MY SETUP</h2>

		<div class="spec-grid">
			<div class="spec-card system-card">
				<h3>System Information</h3>
				<p><strong>Operating System:</strong> Fedora Linux 42 (KDE Plasma Desktop Edition)</p>
				<p><strong>Shell:</strong> fish 4.0.2</p>
			</div>

			<div class="spec-card hardware-card">
				<h3>Hardware</h3>
				<div class="spec-section">
					<h4>Display</h4>
					<p><strong>Monitor:</strong> 28" Odyssey G70A 4K UHD LED</p>
					<p><strong>Resolution:</strong> 3840x2160 @ 144 Hz</p>
				</div>
				<div class="spec-section">
					<h4>CPU</h4>
					<p><strong>Processor:</strong> AMD Ryzen 7 5700X</p>
				</div>
				<div class="spec-section">
					<h4>GPU</h4>
					<p><strong>Graphics Card:</strong> AMD Radeon RX 7900 XT [Discrete]</p>
				</div>
				<div class="spec-section">
					<h4>Memory</h4>
					<p><strong>RAM:</strong> 31.26 GiB total</p>
				</div>
			</div>

			<div class="spec-card peripherals-card">
				<h3>Peripherals</h3>
				<div class="spec-section">
					<h4>Input Devices</h4>
					<p><strong>Keyboard:</strong> Keychron M14 Alice Layout</p>
					<p><strong>Mouse:</strong> Logitech G502 Hero</p>
					<p><strong>Microphone:</strong> Audio-Technica ATR1500x</p>
				</div>
				<div class="spec-section">
					<h4>Audio</h4>
					<p><strong>Headphones:</strong> Beyerdynamic DT770 (80 ohm)</p>
				</div>
			</div>

			<div class="spec-card desktop-card">
				<h3>Desktop Environment</h3>
				<div class="spec-section">
					<h4>Environment</h4>
					<p><strong>Desktop Environment:</strong> KDE Plasma 6.4.1</p>
					<p><strong>Window Manager:</strong> KWin (Wayland)</p>
					<p><strong>WM Theme:</strong> Ant-Dark</p>
				</div>
				<div class="spec-section">
					<h4>Theming</h4>
					<p><strong>System Theme:</strong> Breeze (Ant-Dark) [Qt], Breeze [GTK3]</p>
					<p><strong>Icons:</strong> Papirus-Dark [Qt], Papirus-Dark [GTK3/4]</p>
					<p><strong>Font:</strong> BlexMono Nerd Font (10pt)</p>
					<p><strong>Cursor:</strong> Posy_Cursor_Black (32px)</p>
				</div>
				<div class="spec-section">
					<h4>Terminal</h4>
					<p><strong>Terminal Emulator:</strong> blackbox-terminal</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
		.container {
        max-width: min(50rem, 90vw);
        margin: 0 auto;
        padding: 0 1rem;
        text-align: left;
    }
    .about-header {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
		img	{
				margin-top: 2rem;
      	outline: 4px solid var(--black);
      	outline-offset: -2px;
      	box-shadow: 10px 10px var(--black);
      	transition: box-shadow 0.5s ease-out;
        transform: rotate(-2deg);
		}
		img:hover {
				box-shadow: 4px 4px 0 var(--black);
		}
		.title-block {
				font-size: 3rem;
        margin: 0 0 1rem;
        display: inline-block;
        padding: 2rem;
        text-align: center;
				background: var(--pastelYellow);
				flex: auto;
				outline: 4px solid var(--black);
				outline-offset: -2px;
				box-shadow: 10px 10px var(--black);
				transition: box-shadow 0.5s ease-out;
		}
		.title-block:hover {
				box-shadow: 4px 4px 0 var(--black);
		}
		.about-blurb {
				padding: 1rem 2rem 2rem;
				outline: 4px solid var(--black);
				outline-offset: -2px;
				box-shadow: 10px 10px var(--black);
				transition: box-shadow 0.5s ease-out;
		}
		.title > p {
				font-size: 1.8rem;
		}
		.about-blurb > h1	{
				font-size: 2rem;
        display: inline-block;
				padding: 0.5rem 0.5rem;
				margin: 0;
				background: var(--black);
				color: var(--offWhite);
		}
		.about-blurb > p >strong	{
				color: var(--pastelRed);
				font-size: 1.3rem;
				padding:0;
		}
		.about-blurb:hover	{
				box-shadow: 4px 4px 0 var(--black);
		}
    .boilerplate {
        display: inline-block;
        background: var(--pastelRed);
				margin-top: 1rem;
        padding: 0.5rem;
        border: 2px solid var(--black);
        box-shadow: 5px 5px var(--black);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        transform: rotate(2deg) skew(-2deg);
    }
    .boilerplate:hover {
        transform: rotate(2deg) skew(-2deg) translate(-5px, -5px);
				box-shadow: 2px 2px var(--black);
    }
    .pc-spec {
        margin-top: 3rem;
    }

    .setup-title {
        font-size: 2.5rem;
        font-weight: 900;
        text-transform: uppercase;
        text-align: center;
        margin: 0 0 2rem 0;
        padding: 1.5rem;
        background: var(--pastelBlue);
        color: var(--offWhite);
        outline: 4px solid var(--black);
        outline-offset: -2px;
        box-shadow: 10px 10px var(--black);
        transition: box-shadow 0.5s ease-out;
    }
    .setup-title:hover {
        box-shadow: 4px 4px 0 var(--black);
    }
    .spec-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }
    .spec-card {
        padding: 2rem;
        outline: 4px solid var(--black);
        outline-offset: -2px;
        box-shadow: 10px 10px var(--black);
        transition: box-shadow 0.5s ease-out;
    }
    .spec-card:hover {
        box-shadow: 4px 4px 0 var(--black);
    }
    .spec-card h3 {
        font-size: 1.5rem;
        font-weight: 900;
        margin: 0 0 1.5rem 0;
        text-transform: uppercase;
    }
    .system-card {
        background: var(--pastelYellow);
    }
    .hardware-card {
        background: var(--pastelRed);
    }
    .peripherals-card {
        background: var(--pastelBlue);
        color: var(--black);
    }
    .desktop-card {
        background: var(--offWhite);
    }
    .spec-section {
        margin-bottom: 1.5rem;
    }
    .spec-section h4 {
        font-weight: bold;
        text-decoration: underline;
        margin: 0 0 0.5rem 0;
        font-size: 1.1rem;
    }
    .spec-card p {
        margin: 0.3rem 0;
        font-size: 0.9rem;
    }
    @media (max-width: 768px) {
        .about-header {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }
        .title {
            order: 2;
            margin-top: 0;
            padding-top: 0;
        }
        .title + div {
            order: 1;
        }
        .spec-grid {
            grid-template-columns: 1fr;
        }
        .setup-title {
            font-size: 2rem;
            padding: 1rem;
        }
    }
</style>
<script>
	let formData = {
		subject: '',
		body: '',
		name: ''
	};

	function generateMailto() {
		const { subject, body, name } = formData;
	    const emailSubject = `ScumBlog - ${subject.trim() || 'No subject'}`;
		const emailBody = `Hi Scumble,\n\n${body}\n\nBest regards,\n${name || 'Anonymous'}`;

		return `mailto:scumb1e@proton.me?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
	}

	function handleSubmit() {
		window.location.href = generateMailto();
	}
</script>

<svelte:head>
	<title>Contact Me - Scum Blog</title>
	<meta name="description" content="Feel Free to Reach Out!" />
	<meta property="og:title" content="Contact Me - Scum Blog" />
	<meta property="og:description" content="Feel free to reach out!" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://scumble.dev/contact" />
	<meta property="og:image" content="https://scumble.dev/gifs/email.gif" />
	<link rel="canonical" href="https://scumble.dev/contact" />
</svelte:head>

<h1 class="page-title">contact me</h1>
<p class="page-subtitle"><span class="dot ok"></span>contact online. hit me up.</p>

<form on:submit|preventDefault={handleSubmit}>
	<p class="label">compose message</p>

	<label for="name">your name</label>
	<input type="text" id="name" bind:value={formData.name} placeholder="put your name here" />

	<label for="subject">subject</label>
	<input
		type="text"
		id="subject"
		bind:value={formData.subject}
		placeholder="interesting topic to email me about"
	/>

	<label for="message">message</label>
	<textarea id="message" bind:value={formData.body} placeholder="I usually will get back to you in a day" rows="8"
	></textarea>

	<button type="submit" disabled={!formData.body.trim()}>open email client →</button>

	<p class="note">
		This will open your default email client. If that's not what you want, just email me directly
		at: <strong>scumb1e@pm.me</strong>
	</p>
</form>

<section class="elsewhere">
	<p class="label">other ways to reach me</p>
	<dl>
		<dt>twitter</dt>
		<dd>
			<a href="https://x.com/Skumbl">@Skumbl</a> <span class="muted">(I'm not calling it X)</span>
		</dd>
		<dt>github</dt>
		<dd><a href="https://github.com/Skumbl">github.com/skumbl</a></dd>
		<dt>discord</dt>
		<dd>@scumble <span class="muted">(best way to chat)</span></dd>
	</dl>
</section>

<style>
	form {
		display: flex;
		flex-direction: column;
	}
	label {
		font-size: 0.8rem;
		color: var(--muted);
		margin-top: 1.25rem;
	}
	input,
	textarea {
		font: inherit;
		color: var(--fg);
		background: transparent;
		border: 0;
		border-bottom: 1px solid var(--rule);
		padding: 0.5rem 0;
		transition: border-color 0.15s ease;
	}
	textarea {
		resize: vertical;
		min-height: 9rem;
		border: 1px solid var(--rule);
		padding: 0.75rem;
		margin-top: 0.5rem;
	}
	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--accent);
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--muted);
		opacity: 0.6;
	}
	button {
		align-self: flex-start;
		margin-top: 2rem;
		font: inherit;
		color: var(--bg);
		background: var(--fg);
		border: 1px solid var(--fg);
		padding: 0.6rem 1.25rem;
		cursor: pointer;
		transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
	}
	button:hover:not(:disabled) {
		background: var(--accent);
		border-color: var(--accent);
		transform: rotate(-1.5deg);
	}
	button:disabled {
		cursor: not-allowed;
		opacity: 0.35;
	}
	.note {
		font-size: 0.8rem;
		color: var(--muted);
		margin: 1.5rem 0 0;
	}
	.elsewhere {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid var(--rule);
	}
	dl {
		display: grid;
		grid-template-columns: 6rem 1fr;
		gap: 0.4rem 1rem;
		margin: 0;
		font-size: 0.9rem;
	}
	dt {
		color: var(--muted);
	}
	dd {
		margin: 0;
	}
	.muted {
		color: var(--muted);
	}
</style>

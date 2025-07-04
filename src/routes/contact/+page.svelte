<script>
	let formData = {
		subject: '',
		body: '',
		name: ''
	};

	function generateMailto() {
		const { subject, body, name } = formData;
		const emailSubject = subject || 'Message from Scum Blog';
		const emailBody = `Hi Scumble,\n\n${body}\n\nBest regards,\n${name || 'Anonymous'}`;

		return `mailto:your-email@example.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
	}

	function handleSubmit() {
		window.location.href = generateMailto();
	}
</script>

<div class="contact-container">
	<section class="contact-hero">
		<div class="title-card">
			<h1 class="page-title">Contact Me</h1>
			<p class="subtitle">hit me up</p>
		</div>

		<div class="status-box">
			<div class="status-indicator"></div>
			<span class="status-text">Currently Available for Mid Takes</span>
		</div>
	</section>

	<section>
		<div class="form-card">
			<h2 class="form-title">[COMPOSE MESSAGE]</h2>

			<div class="form-group">
				<label for="name" class="form-label">Your Name:</label>
				<input
					type="text"
					id="name"
					bind:value={formData.name}
					placeholder="put your name here"
					class="form-input"
				>
			</div>

			<div class="form-group">
				<label for="subject" class="form-label">Subject:</label>
				<input
					type="text"
					id="subject"
					bind:value={formData.subject}
					placeholder="why the framework I like is bad"
					class="form-input"
				>
			</div>

			<div class="form-group">
				<label for="message" class="form-label">Message:</label>
				<textarea
					id="message"
					bind:value={formData.body}
					placeholder="Type your message here... Please be gentle"
					class="form-textarea"
					rows="8"
				></textarea>
			</div>

			<button
				on:click={handleSubmit}
				class="submit-button"
				disabled={!formData.body.trim()}
			>
				Open Email Client
			</button>

			<p class="form-note">
				This will open your default email client. If that's not what you want,
				just email me directly at: <strong>scumble@pm.me</strong>
			</p>
		</div>
	</section>

	<section>
		<h2 class="methods-title">Other Ways to Reach Me</h2>

		<div class="methods-grid">
			<div class="method-card social-card">
				<h3>Social</h3>
				<p>@scumble.xyz on BlueSky</p>
				<a href="https://bsky.app/profile/scumble.xyz" class="method-link">Follow Me</a>
			</div>

			<div class="method-card github-card">
				<h3>GitHub</h3>
				<p>github.com/skumbl</p>
				<a href="https://github.com/Skumbl" class="method-link">Check My Code</a>
			</div>

			<div class="method-card discord-card">
				<h3>Discord</h3>
				<p>@scumble</p>
				<span class="method-note">for 'gamin</span>
			</div>
		</div>
	</section>
</div>

<style>
    .contact-container {
        max-width: min(60rem, 90vw);
        margin: 0 auto;
        padding: 2rem 1rem;
    }
    .contact-hero {
        text-align: center;
        margin-bottom: 4rem;
    }
    .title-card {
        display: inline-block;
        padding: 2rem 3rem;
        background: var(--pastelYellow);
        border: 4px solid var(--black);
        box-shadow: 12px 12px 0 var(--black);
        margin-bottom: 2rem;
        transform: rotate(-1deg);
        transition: all 0.3s ease;
    }
    .title-card:hover {
        box-shadow: 6px 6px 0 var(--black);
        transform: rotate(-1deg) translate(3px, 3px);
    }
    .page-title {
        font-size: clamp(2.5rem, 6vw, 4rem);
        font-weight: 900;
        margin: 0 0 0.5rem 0;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    .subtitle {
        font-size: 1.1rem;
        margin: 0;
        font-style: italic;
    }
    .status-box {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem 1.5rem;
        background: var(--black);
        color: var(--offWhite);
        border: 4px solid var(--black);
        font-weight: bold;
    }
    .status-indicator {
        width: 12px;
        height: 12px;
        background: #00ff00;
        border-radius: 50%;
        animation: pulse 2s infinite;
    }
    @keyframes pulse {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0.3; }
    }
    .form-card {
        border: 4px solid var(--black);
        box-shadow: 10px 10px 0 var(--black);
        padding: 3rem;
        margin-bottom: 3rem;
        transition: all 0.3s ease;
    }
    .form-card:hover {
        box-shadow: 5px 5px 0 var(--black);
    }
    .form-title {
        font-size: 2rem;
        font-weight: 900;
        text-transform: uppercase;
        margin: 0 0 2rem 0;
        background: var(--black);
        color: var(--offWhite);
        padding: 1rem;
        text-align: center;
    }
    .form-group {
        margin-bottom: 2rem;
    }
    .form-label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
    }
    .form-input,
    .form-textarea {
        width: 100%;
        padding: 1rem;
        border: 3px solid var(--black);
        background: var(--offWhite);
        font-size: 1rem;
        transition: all 0.2s ease;
        box-sizing: border-box;
    }
    .form-input:focus,
    .form-textarea:focus {
        outline: none;
        box-shadow: 4px 4px 0 var(--pastelBlue);
        transform: translate(-2px, -2px);
    }
    .form-textarea {
        resize: vertical;
        min-height: 150px;
    }
    .submit-button {
        background: var(--pastelRed);
        color: var(--black);
        border: 4px solid var(--black);
        padding: 1rem 2rem;
        font-size: 1.1rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: inherit;
        letter-spacing: 0.5px;
    }
    .submit-button:hover:not(:disabled) {
        background: var(--pastelYellow);
        box-shadow: 4px 4px 0 var(--black);
        transform: translate(-2px, -2px);
    }
    .submit-button:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
    .form-note {
        margin-top: 1.5rem;
        font-size: 0.9rem;
        color: #666;
        text-align: center;
        font-style: italic;
    }
    .methods-title {
        font-size: 2.5rem;
        font-weight: 900;
        text-transform: uppercase;
        text-align: center;
        margin: 0 0 2rem 0;
        padding: 1.5rem;
        background: var(--pastelBlue);
        color: var(--offWhite);
        border: 4px solid var(--black);
        box-shadow: 8px 8px 0 var(--black);
    }
    .methods-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }
    .method-card {
        padding: 2rem;
        border: 4px solid var(--black);
        box-shadow: 6px 6px 0 var(--black);
        text-align: center;
        transition: all 0.3s ease;
    }
    .method-card:hover {
        box-shadow: 3px 3px 0 var(--black);
        transform: translate(1.5px, 1.5px);
    }
    .method-card h3 {
        font-size: 1.5rem;
        margin: 0 0 1rem 0;
        font-weight: 900;
    }
    .method-card p {
        margin: 0.5rem 0;
        font-weight: bold;
    }
    .social-card {
        background: var(--pastelBlue);
        color: var(--offWhite);
    }
    .github-card {
        background: var(--black);
        color: var(--offWhite);
    }
    .discord-card {
        background: var(--pastelRed);
    }
    .method-link {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background: var(--black);
        color: var(--offWhite);
        text-decoration: none;
        border: 2px solid var(--black);
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.8rem;
        transition: all 0.2s ease;
    }
    .method-link:hover {
        background: var(--offWhite);
        color: var(--black);
        box-shadow: 2px 2px 0 var(--black);
        transform: translate(-1px, -1px);
    }
    .method-note {
        font-size: 0.8rem;
        font-style: italic;
        color: #666;
        margin-top: 0.5rem;
    }
    @media (max-width: 768px) {
        .methods-grid {
            grid-template-columns: 1fr;
        }
        .form-card {
            padding: 2rem;
        }
        .title-card {
            padding: 1.5rem 2rem;
        }
    }
</style>
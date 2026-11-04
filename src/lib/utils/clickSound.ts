const NOTES = [523.25, 587.33, 659.25, 783.99, 880];

let audioContext: AudioContext | undefined;

export function playClickSound(): void {
	audioContext ??= new AudioContext();
	if (audioContext.state === 'suspended') void audioContext.resume();

	const now = audioContext.currentTime;
	const note = NOTES[Math.floor(Math.random() * NOTES.length)];

	const oscillator = audioContext.createOscillator();
	oscillator.type = 'sine';
	oscillator.frequency.setValueAtTime(note, now);
	oscillator.frequency.exponentialRampToValueAtTime(note * 1.5, now + 0.08);

	const gain = audioContext.createGain();
	gain.gain.setValueAtTime(0.0001, now);
	gain.gain.exponentialRampToValueAtTime(0.15, now + 0.01);
	gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

	oscillator.connect(gain).connect(audioContext.destination);
	oscillator.start(now);
	oscillator.stop(now + 0.2);
}

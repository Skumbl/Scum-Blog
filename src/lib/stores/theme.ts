import { writable } from 'svelte/store';
import { browser} from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>('light');
	return {
		subscribe,

		//init theme from local storage
		init():void {
			if (browser) {
				const saved = localStorage.getItem('theme') as Theme;
				const systemPreference: 'light' | 'dark' = window.matchMedia("(prefers-color-scheme: dark)")
					.matches ? 'dark' : 'light';

				const theme: Theme = saved || systemPreference;
				this.setTheme(theme)
			}
		},

		setTheme(theme: Theme) {
			if (browser) {
				set(theme);
				localStorage.setItem('theme', theme)
				document.documentElement.setAttribute('data-theme', theme)
			}
		},

		toggleTheme() {
			update(currentTheme => {
				const newTheme = currentTheme === 'light' ? 'dark': 'light';
				this.setTheme(newTheme);
				return newTheme;
				});
		}
	}
}

export const themeStore =  createThemeStore();
import { writable } from 'svelte/store';

export interface DarkModeState {
	isDarkMode: boolean;
}

export const darkModeState = writable<DarkModeState>({
	isDarkMode: false
});
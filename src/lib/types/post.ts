import type { Component } from 'svelte';

export type PostData = {
	postId: string;
	title: string;
	date: string;
	categories?: string[];
	Content: Component;
}
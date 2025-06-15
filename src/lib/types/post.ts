import type { Component } from 'svelte';
export type PostData = {
	postId: string;
	title: string;
	date: string;
	categories?: string[];
	Content: Component;
}
export interface MarkdownMetadata {
	title: string;
	date: string;
	categories?: string[];
}

export interface MarkdownModule {
	metadata: MarkdownMetadata;
	default: Component;
}
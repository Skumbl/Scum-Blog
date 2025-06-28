import type { Component } from 'svelte';

export type PostData = {
	slug: string;
	title: string;
	date: string;
	categories?: string[];
	image?: boolean;
	Content: Component;
}

export interface MarkdownMetadata {
	title: string;
	date: string;
	categories?: string[];
	image?: boolean;
}

export interface MarkdownModule {
	metadata: MarkdownMetadata;
	default: Component;
}
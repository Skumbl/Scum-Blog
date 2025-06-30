import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
	const currentRoute: string = url.pathname;

	return {
		currentRoute
	};
};
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import {markdown} from "svelte-preprocess-markdown"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [".svelte", ".md"],

	preprocess: [preprocess(), markdown()],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;

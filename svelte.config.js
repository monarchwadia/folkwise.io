import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// need to do this since we're using modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: './src/components/post.layout.svelte'
		})
	],

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					src: path.resolve(__dirname, './src')
				}
			}
		}
	},
	extensions: ['.svelte', '.md']
};

export default config;

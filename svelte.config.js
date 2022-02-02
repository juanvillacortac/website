import preprocess from 'svelte-preprocess';
import { windi } from 'svelte-windicss-preprocess';
import { optimizeImports } from "carbon-preprocess-svelte";
import { imagetools } from 'vite-imagetools';
import auto from '@sveltejs/adapter-auto';
import node from '@sveltejs/adapter-node';
import svg from '@poppanator/sveltekit-svg'

const adapter = () => {
	switch (process.env.ADAPTER?.toLowerCase()) {
		case 'node':
			return node()
		default:
			return auto()
	}
}

const GITPOD_HMR_HOST = process.env.GITPOD_HMR_HOST?.substring('https://'.length)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		windi({
			silent: true,
			configPath: './windi.config.js',
		}),
		optimizeImports(),
	],
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		methodOverride: {
			parameter: '_method',
			allowed: ['PUT', 'PATCH', 'DELETE']
		},
		inlineStyleThreshold: 48 / 0.0009765625,
		vite: {
			plugins: [
				svg(),
				imagetools(),
			],
			server: {
				hmr: GITPOD_HMR_HOST ? {
					clientPort: 443,
					host: GITPOD_HMR_HOST
				} : undefined,
			},
		},
	}
};

export default config;

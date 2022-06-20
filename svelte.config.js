import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [preprocess({
        "postcss": true
    }), mdsvex(mdsvexConfig)],

    kit: {
		adapter: adapter(),
        prerender: {
            default: true,
        },
    paths: {
        base: process.env.NODE_ENV === "production" ? "" : "",
    }
	},
};

export default config;
// Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
const mode = process.env.NODE_ENV;
const dev = mode === "development";
process.env.TAILWIND_MODE = dev ? "watch" : "build";

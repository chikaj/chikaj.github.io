export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/__layout-home.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/blog.svelte"),
	() => import("../../src/routes/development.svelte"),
	() => import("../../src/routes/index@home.svelte"),
	() => import("../../src/routes/resources.svelte"),
	() => import("../../src/routes/university.svelte")
];

export const dictionary = {
	"about": [[0, 3], [1]],
	"blog": [[0, 4], [1]],
	"development": [[0, 5], [1]],
	"@home": [[2, 6], [1]],
	"resources": [[0, 7], [1]],
	"university": [[0, 8], [1]]
};
<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}
	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		/* display: block; */
		/* color: white; */
	}
	
	.container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		/* background-color: blue */
	}
</style>

<nav class="container">
		<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a>
		<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>
		<a aria-current="{segment === 'university' ? 'page' : undefined}" href="university">university</a>
		<!-- <a aria-current="{segment === 'research' ? 'page' : undefined}" href="research">research</a>
		<a aria-current="{segment === 'teaching' ? 'page' : undefined}" href="teaching">teaching</a> -->
		<a aria-current="{segment === 'development' ? 'page' : undefined}" href="development">development</a>
		<a aria-current="{segment === 'resources' ? 'page' : undefined}" href="resources">resources</a>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a>
</nav>

<script>
  import "../app.postcss";

  import Headroom from "svelte-headroom";
  import { Hamburger } from "svelte-hamburgers";

  // import Satellite from "$lib/satellite/index.svelte";
  import Menu from "$lib/header/Menu.svelte";
  import Footer from "$lib/footer/index.svelte";

  let open;
</script>

<div class="z-20">
  <Headroom>
    <Hamburger bind:open --color="gray" />
  </Headroom>
</div>

<div class="fixed">
  <Menu bind:open />
</div>

<header class="h-full">
  <slot name="header"></slot>
  <img class="h-full w-full object-cover" src="https://www.liveenhanced.com/wp-content/uploads/2018/07/Mountain-Photography-39.jpg" alt="">
  <!-- <Satellite /> -->
</header>

<div class="flex-1 flex flex-col">
  <main class="flex-1 w-5/6 m-auto p-10">
    <slot />
  </main>

  <footer>
    <Footer />
  </footer>
</div>

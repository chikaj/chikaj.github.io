<script>
  import "../app.postcss";

  import Headroom from "svelte-headroom";
  import { Hamburger } from "svelte-hamburgers";

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

<div class="flex-1 flex flex-col">
  <main class="flex-1 w-5/6 m-auto p-10">
    <slot />
  </main>

  <footer>
    <Footer />
  </footer>
</div>

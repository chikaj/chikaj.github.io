<script>
  import Headroom from "svelte-headroom";
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "$lib/header/Menu.svelte";

  let open;
</script>

<Headroom>
  <div class="bg-blue-300">
    <Hamburger bind:open --color="black" />

    <Menu bind:open />
  </div>
</Headroom>

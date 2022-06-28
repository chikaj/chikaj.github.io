<script>
  import { fly, scale } from "svelte/transition";
  import { quadOut } from "svelte/easing";

  export let open;
</script>

{#if open}
  <div class="h-full w-5/6 md:w-1/3 fixed py-10 bg-white border border-2">
    <p transition:fly={{ y: -15, delay: 50 }} class="p-2 text-lg text-center">
      <a href="/">Home</a>
    </p>
    {#each ["About", "University", "Development", "Resources", "Blog"] as link, i}
      <p
        transition:fly={{ y: -15, delay: 50 * (i + 1) }}
        class="p-2 text-lg text-center"
      >
        <a href={link.toLocaleLowerCase()}>{link}</a>
      </p>
    {/each}
  </div>
{/if}

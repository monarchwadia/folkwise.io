<script lang="ts">
  import Hero from './Hero.svelte';
  import Navbar from './Navbar.svelte';
  import { page } from '$app/stores';
  $: index = $page.url.pathname === '/';
</script>

<header>
  <Navbar />
  {#if index}
    <Hero />
  {/if}
</header>

<style lang="scss">
  @use 'src/styles/colors' as colors;
  header {
    background-image: url('/assets/kikko-light-optimized.svg');
    background-size: 100%;
    background-position: left 2rem top -2rem;
    background-repeat: no-repeat;
  }
</style>

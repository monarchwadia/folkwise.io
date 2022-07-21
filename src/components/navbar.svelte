<script lang="ts">
  import Hamburger from './hamburger.svelte';

  let isOpen = false;

  let vwidth: number;
</script>

<!-- Svelte's method for getting window properties: https://svelte.dev/tutorial/svelte-window-bindings -->
<svelte:window bind:innerWidth={vwidth} />

<div class="navbar">
  <a href="/" class="logo-link"><img class="logo-img" src="/wordmark.png" alt="logo" /></a>
  {#if isOpen || vwidth >= 768}
    <div class={isOpen === true ? 'navlink-container' : 'navlink-container hidden-nav'}>
      <ul>
        <li><a href="/" on:click={() => (isOpen = false)}>Home</a></li>
        <li><a href="/blog" on:click={() => (isOpen = false)}>Blog</a></li>
        <li><a href="/about" on:click={() => (isOpen = false)}>About</a></li>
        <li><a href="/contact" on:click={() => (isOpen = false)}>Contact</a></li>
      </ul>
    </div>
  {/if}
  <Hamburger {isOpen} onClick={() => (isOpen = !isOpen)} />
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;

  .navbar {
    position: relative;
    gap: 1rem;
    display: flex;
    justify-content: left;
    align-items: baseline;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;

    .logo-img {
      max-width: 8rem;
      margin: 0;
      padding-top: 1rem;
    }

    ul {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: baseline;
      list-style: none;
      gap: 1.25rem;
      background-color: colors.$dark;

      li {
        a {
          position: relative;
          text-decoration: none;
          color: colors.$highlight;
          transition: all 300ms;

          &:hover {
            color: colors.$light;

            &::after {
              opacity: 1;
            }
          }

          &::after {
            position: absolute;
            bottom: -4px;
            left: 0;
            content: '';
            width: 100%;
            height: 2px;
            background-color: colors.$light;
            opacity: 0;
            transition: all 300ms;
          }
        }
      }
    }
  }

  .hidden-nav {
    display: none;
  }

  @media screen and (max-width: 767px) {
    .navbar {
      justify-content: space-between;
    }

    .navlink-container {
      position: absolute;
      right: 0;
      top: 100%;

      ul {
        flex-direction: column;
        padding: 1rem 2rem 1rem 2rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .hidden-nav {
      display: flex;
    }
  }
</style>

<script lang="ts">
  import { ffEnableEmailForms } from '../client/config';
  import Hamburger from '../hamburger.svelte';
  import { navActive } from './store';

  let isOpen = false;

  let vwidth: number;

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];
</script>

<!-- Svelte's method for getting window properties: https://svelte.dev/tutorial/svelte-window-bindings -->
<svelte:window bind:innerWidth={vwidth} />

<div class="navbar">
  <a href="/" class="logo"><img src="/assets/wordmark.png" alt="logo" title="test" /></a>
  {#if isOpen || vwidth >= 768}
    <div class={isOpen === true ? 'navlink-container' : 'navlink-container hidden-nav'}>
      <ul>
        {#each navItems as item}
          {#if item.name === 'Contact'}
            {#if ffEnableEmailForms}
              <li>
                <a
                  href={item.href}
                  on:click={() => {
                    isOpen = false;
                    navActive.set(item.name);
                  }}>{item.name}</a
                >
              </li>
            {/if}
          {:else}
            <li>
              <a
                href={item.href}
                on:click={() => {
                  isOpen = false;
                  navActive.set(item.name);
                }}>{item.name}</a
              >
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  {/if}
  <Hamburger {isOpen} onClick={() => (isOpen = !isOpen)} />
</div>

<style type="scss">
  @use 'src/styles/colors' as colors;
  @use 'src/styles/sizing' as sizing;

  .navbar {
    position: relative;
    gap: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0 auto;
    padding: 0 sizing.$gutters;
    // background: linear-gradient(250deg, colors.$dark 22%, colors.$dark-85 90%);
    background: colors.$dark;
    border-bottom: 1px solid colors.$grey-50;
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 0;
      img {
        max-width: 8rem;
      }
    }

    ul {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 1.25rem;
      height: 100%;

      li {
        display: flex;
        align-items: center;
        height: 100%;

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
      padding-inline: 0.75rem;
      height: 4rem;
    }

    .navlink-container {
      position: absolute;
      margin: 0;
      padding: 0;
      right: 0;
      top: 3rem;
      width: 50%;
      // border: yellow solid;

      ul {
        flex-direction: column;
        align-items: center;
        padding: 1rem 1rem 1rem 1rem;

        li {
          width: 80%;
          padding: 0.75rem 0.5rem 0 0.5rem;
          border-top: 1px solid colors.$white;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .hidden-nav {
      display: flex;
    }
  }
</style>

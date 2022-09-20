<script lang="ts">
  // /*Done, I think*/ throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import Navbar from '$lib/navbar.svelte';
  import Footer from '$lib/footer.svelte';
  import GlobalStyles from '$lib/global-styles.svelte';
  import PostMetatags from '$lib/post.metatags.svelte';
  import GoogleAnalytics from '$lib/google-analytics.svelte';

  import { fade } from 'svelte/transition';

  interface Data {
    currentRoute: string
  }

  export let data: Data;
</script>

<GlobalStyles>
  <div class="wrapper">
    <div class="navbar-wrapper">
      <Navbar />
    </div>
    {#key data.currentRoute}
      <div class="content-wrapper" in:fade={{ duration: 150 }} out:fade={{ duration: 150 }}>
        <slot />
      </div>
    {/key}
    <Footer />
  </div>
</GlobalStyles>
<PostMetatags />
<!-- Disabling for now, ethical purposes -->
<!-- <GoogleAnalytics /> -->

<style lang="scss">
  @use 'src/styles/colors' as colors;

  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: colors.$light;
    // background-image: linear-gradient(to top, colors.$white, colors.$light);
    background-size: cover;
    background-position: center;
  }

  .navbar-wrapper {
    flex-shrink: 0;
    padding: 1rem 0;
    background-color: colors.$dark;
    background-repeat: no-repeat;
    background-size: 60%, 100%;
    background-position: 108% 7%, 0 0;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    height: 100%;
    min-height: 100%;
    padding: 0 1rem;
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    .content-wrapper {
      padding: 0 0.75rem;
    }
  }
</style>

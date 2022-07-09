<script>
  import Navbar from 'src/components/navbar.svelte';
  import Footer from 'src/components/footer.svelte';
  import GlobalStyles from 'src/components/global-styles.svelte';
  import PostMetatags from 'src/components/post.metatags.svelte';
  import GoogleAnalytics from 'src/components/google-analytics.svelte';
</script>

<GlobalStyles>
  <div class="wrapper">
    <div class="navbar-wrapper">
      <Navbar />
    </div>
    <div class="content-wrapper">
      <slot />
    </div>
    <Footer />
  </div>
</GlobalStyles>
<PostMetatags />
<GoogleAnalytics />

<style lang="scss">
  @use 'src/styles/colors' as colors;

  .wrapper {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: colors.$light;
  }

  .navbar-wrapper {
    padding: 2vh 2vw;
    background-color: colors.$dark;
  }

  .content-wrapper {
    flex: 1 1 auto;
    min-height: 100%;
    padding: 0;
    max-width: 100%;
    margin: auto;
  }
</style>

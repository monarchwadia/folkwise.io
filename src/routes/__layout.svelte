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
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: colors.$light;
  }

  .navbar-wrapper {
    flex-shrink: 0;
    padding: 1rem;
    background-color: colors.$dark;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    height: 100%;
    min-height: 100%;
    padding: 0;
    max-width: 100%;
    margin: 0 auto;
  }

  footer {
    flex-shrink: 0;
  }
</style>

<script>
  import Navbar from "src/components/navbar.svelte"
  import GlobalStyles from "src/components/global-styles.svelte"
  import PostMetatags from "src/components/post.metatags.svelte"
</script>

<GlobalStyles>
  <div class="wrapper">
    <div class="navbar-wrapper">
      <Navbar />
    </div>
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</GlobalStyles>
<PostMetatags />


<style lang="scss">
  @use "src/styles/colors" as colors;

  .navbar-wrapper {
    padding: 2vh 2vw;
    background-color: colors.$dark;
  }

  .content-wrapper {
    padding: 2vh 2vw;
    max-width: 600px;
    margin: auto;
  }

  .wrapper {
    background-color: colors.$light;
  }
</style>

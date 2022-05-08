<script>
  import Navbar from "../components/navbar.svelte"
  import GlobalStyles from "../components/global-styles.svelte"
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

<style lang="scss">
  @use "../styles/colors" as colors;

  .navbar-wrapper {
    background-color: colors.$dark;
    padding: 2vh 2vw;
  }

  .content-wrapper {
    padding: 2vh 2vw;
  }
</style>

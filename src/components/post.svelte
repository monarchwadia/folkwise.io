<div class="post">
  {@html post.html}
  <a href={post.slug}>Link</a>
</div>

<script>
  export let post;
</script>

<style lang="scss">
  @use "../styles/colors" as colors;

  .post {
    border-radius: 0px 100px 100px 100px;
    border: 10px solid colors.$dark;
    padding: 90px 60px;
    background-color: colors.$light;
  }
</style> 
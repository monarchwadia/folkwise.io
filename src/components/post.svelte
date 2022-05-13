<div class="post">
  {@html post.html}
  <br/>
  <a href={post.slug}>Link</a>
</div>

<script>
  export let post;
</script>

<style lang="scss">
  @use "../styles/colors" as colors;

  .post {
    border-bottom: 3px solid colors.$dark;
    padding: 20px 60px 60px 60px;
    background-color: colors.$light;
  }
</style> 
<script lang="ts">
  import type { Post } from 'src/types';

  export let post: Post;
</script>

<div class="post">
  {@html post.html}
  <br />
  <a href={post.slug}>Link</a>
</div>

<style lang="scss">
  @use 'src/styles/colors' as colors;

  .post {
    border-bottom: 3px solid colors.$dark;
    margin-bottom: 1rem;
    padding: 2rem;
    background-color: colors.$light;

    a {
      color: colors.$highlight-red;
    }
  }
</style>
